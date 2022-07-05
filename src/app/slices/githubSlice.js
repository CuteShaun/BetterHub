import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalcount: 0,
  currentPage: 0,
};

export let abortController = {};

export const getRepos = createAsyncThunk(
  "github/getRepos",
  async function (queries, { rejectWithValue }) {
    abortController = new AbortController();
    const signal = abortController.signal;
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${queries.query}&page=${queries.page}&per_page=${queries.DEFAULT_PER_PAGE}&sort=${queries.DEFAULT_SORT}`,
        { signal: signal }
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    resetRepos: (state) => {
      state.data = [];
      state.totalCount = 0
    },
    resetCurrentPage: (state) => {
      state.currentPage = 0;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getRepos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getRepos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload.items;
      state.totalCount = action.payload.total_count;
    },
    [getRepos.rejected]: setError,
  },
});

export const { resetRepos, resetCurrentPage, updateCurrentPage } = githubSlice.actions;
export default githubSlice.reducer;

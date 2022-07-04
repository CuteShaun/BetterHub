import React from "react";
import { useSelector } from "react-redux";
import { BetterHubCard } from "../betterHubCard/BetterHubCard";
import { Preloader } from '../preloader/Preloader';

import "./searchResults.scss";

export const SearchResults = () => {
  const repos = useSelector((state) => state.github.data);
  const status = useSelector((state) => state.github.status);

  if(status === 'loading') {
    return <div className="search-results__preloader-wrap"><Preloader/></div>
  }

  return (
    <main>
      {repos.map((repo) => {
        return (
          <BetterHubCard
            title={repo.full_name}
            key={repo.id}
            stars={repo.stargazers_count}
            lang={repo.language}
            topics={repo.topics}
            url={repo.html_url}
            desc={repo.description}
            issues={repo.open_issues}
            starsUrl={repo.stargazers_url}
            license={repo?.license?.name}
          />
        );
      })}
    </main>
  );
};

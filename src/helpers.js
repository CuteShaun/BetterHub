export const getProgrammingLanguageColor = (language) => {
  let color = '';
  switch (language) {
    case "ruby":
    color = "#701516";
      break;
    case "typescript":
     color = "#3178c6";
     break;
    case "javascript":
     color = "#f1e05a";
      break;
    case "shell":
     color = "#89e051";
      break;
    case "java":
     color = "#b07219";
      break;
    case "python":
     color = "#3572A5";
      break;
    case "go":
     color = "#00ADD8";
      break;
    case "kotlin":
     color = "#A97BFF";
      break;
    case "html":
     color = "#e34c26";
      break;
    case "css":
     color = "#563d7c";
      break;
    case "php":
     color = "#4F5D95";
      break;
    case "c#":
     color = "#178600";
      break;
    case "c":
     color = "#555555";
      break;
    case "c++":
     color = "#f34b7d";
      break;
    default:
     color = "#df4142";
  }

  return color;
};

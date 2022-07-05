import React from "react";
import { ReactComponent as StarIcon } from "./star.svg";
import { getProgrammingLanguageColor } from "../../helpers";
import { BASE_URL } from "../../contstants";
import "./BetterHubCard.scss";

export const BetterHubCard = ({
  title = "",
  desc = "",
  stars = "",
  license = "",
  lang = "",
  topics = [],
  url = "",
  issues = 0,
} = {}) => {

  const renderCardTopics = () => {
    return topics.map((topic, index) => {
      return (
        <a className="card__topics-item" href={`${BASE_URL}/topics/${topic}`} key={index}>
          {topic}
        </a>
      );
    });
  };

  const renderDescription = () => {
    if (desc && desc.length > 300) {
      return `${desc.substring(0, 300)}...`;
    }

    return desc;
  };

  return (
    <div className="card">
      <h2 className="card__title">
        <a className="card__link" href={url}>
          {title}
        </a>
      </h2>
      <div className="card__description">{renderDescription()}</div>

      {topics.length > 0 && <div className="card__topics">{renderCardTopics()}</div>}

      <section className="card__footer">
        <a href={`${BASE_URL}/${title}/stargazers`} className="card__stars card__footer-item">
          <StarIcon />
          {stars}
        </a>

        {lang !== null && (
          <div className="card__language card__footer-item">
            <span
              className="card__language-color"
              style={{ backgroundColor: getProgrammingLanguageColor(lang?.toLowerCase()?.trim()) }}
            ></span>
            <span className="card__language-text">{lang}</span>
          </div>
        )}

        {license.length > 0 && <div className="card__license card__footer-item">{license}</div>}

        {issues !== 0 && (
          <div className="card__issues card__footer-item">{`${issues} issues need help`}</div>
        )}
      </section>
    </div>
  );
};

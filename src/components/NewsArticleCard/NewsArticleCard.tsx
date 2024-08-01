import React, { SyntheticEvent } from "react";
import "./NewsArticleCard.scss";
import { NewsArticle } from "../../features/manageNewsArticles/types";
import placeholderImage from "../../assets/placeholder.jpeg";
import parse from "html-react-parser";

interface NewsArticleCardProps {
  newsArticle: NewsArticle;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ newsArticle }) => {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholderImage;
  };

  return (
    <div className="news-article-card">
      <div className="news-article-heading">
        <img
          src={newsArticle.image || placeholderImage}
          alt={newsArticle.title}
          onError={handleImageError}
          className="news-article-image"
        />
        <div className="news-article-title">
          <div className="heading-date">
            <span>{newsArticle.date}</span>
            <span>{newsArticle.source}</span>
          </div>
          <h2>{parse(newsArticle.title)}</h2>
        </div>
      </div>

      {parse("<p>" + newsArticle.body + "</p>")}
      <p>{newsArticle.author}</p>
    </div>
  );
};

export default NewsArticleCard;

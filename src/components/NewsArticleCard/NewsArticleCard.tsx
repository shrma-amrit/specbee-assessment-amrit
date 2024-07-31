import React from "react";
import "./NewsArticleCard.scss";

interface NewsArticleCardProps {
  title: string;
  date: string;
  body: string;
  author: string;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({
  title,
  date,
  body,
  author,
}) => {
  return (
    <div className="news-article-card">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default NewsArticleCard;

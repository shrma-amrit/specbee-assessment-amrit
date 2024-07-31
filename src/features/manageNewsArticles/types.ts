import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type ErrorType = FetchBaseQueryError | SerializedError | undefined;

interface NewsArticle {
  title: string;
  url: string;
  image: string;
  body: string;
  date: string;
  source: string;
  author: string;
}

interface NewsArticlesState {
  newsArticles: NewsArticle[];
  errorGetAllNewsArticles: ErrorType;
  loadingGetAllNewsArticles: boolean;
  selectedAuthors: string[];
  selectedCategories: string[];
}

export type { NewsArticle, NewsArticlesState, ErrorType };

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type ErrorType = FetchBaseQueryError | SerializedError | undefined;
type SortByType = "Date" | "Title";
type SortingOrderType = "asc" | "desc";

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
  selectedSortBy: SortByType;
  selectedSortingOrder: SortingOrderType;
}

export type {
  NewsArticle,
  NewsArticlesState,
  ErrorType,
  SortByType,
  SortingOrderType,
};

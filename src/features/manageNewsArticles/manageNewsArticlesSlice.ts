import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorType, NewsArticle, NewsArticlesState } from "./types";

const initialState: NewsArticlesState = {
  newsArticles: [],
  errorGetAllNewsArticles: undefined,
  loadingGetAllNewsArticles: false,
  selectedAuthors: [],
  selectedCategories: [],
};

export const manageNewsArticlesSlice = createSlice({
  name: "manageNewsArticlesSlice",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loadingGetAllNewsArticles = true;
      state.newsArticles = [];
      state.errorGetAllNewsArticles = undefined;
    },
    setNewsArticles: (state, action: PayloadAction<NewsArticle[]>) => {
      state.loadingGetAllNewsArticles = false;
      state.newsArticles = action?.payload;
      state.errorGetAllNewsArticles = undefined;
    },
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.loadingGetAllNewsArticles = false;
      state.newsArticles = [];
      state.errorGetAllNewsArticles = action?.payload;
    },
    setSelectedAuthors: (state, action: PayloadAction<string[]>) => {
      state.selectedAuthors = action.payload;
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
  },
});

export const {
  setLoading,
  setNewsArticles,
  setError,
  setSelectedAuthors,
  setSelectedCategories,
} = manageNewsArticlesSlice.actions;

export default manageNewsArticlesSlice.reducer;

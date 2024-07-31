import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorType, NewsArticle, NewsArticlesState, SortByType } from "./types";

const initialState: NewsArticlesState = {
  newsArticles: [],
  errorGetAllNewsArticles: undefined,
  loadingGetAllNewsArticles: false,
  selectedAuthors: [],
  selectedCategories: [],
  selectedSortBy: "Date",
  selectedSortingOrder: "desc",
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
    setSortBy(state, action: PayloadAction<SortByType>) {
      state.selectedSortBy = action.payload;
      if (action.payload === "Date") {
        state.selectedSortingOrder = "desc";
      } else if (action.payload === "Title") {
        state.selectedSortingOrder = "asc";
      }
    },
    toggleSortingOrder(state) {
      state.selectedSortingOrder =
        state.selectedSortingOrder === "asc" ? "desc" : "asc";
    },
  },
});

export const {
  setLoading,
  setNewsArticles,
  setError,
  setSelectedAuthors,
  setSelectedCategories,
  setSortBy,
  toggleSortingOrder,
} = manageNewsArticlesSlice.actions;

export default manageNewsArticlesSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle, NewsArticlesState } from "./types";

const initialState: NewsArticlesState = {
  newsArticles: [],
};

export const manageNewsArticlesSlice = createSlice({
  name: "manageNewsArticlesSlice",
  initialState,
  reducers: {
    setNewsArticles: (state, action: PayloadAction<NewsArticle[]>) => {
      state.newsArticles = action?.payload;
    },
  },
});

export const { setNewsArticles } = manageNewsArticlesSlice.actions;

export default manageNewsArticlesSlice.reducer;

export type { NewsArticlesState };

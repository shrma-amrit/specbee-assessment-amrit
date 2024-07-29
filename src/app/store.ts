import { configureStore } from "@reduxjs/toolkit";
import manageNewsArticlesReducer from "../features/manageNewsArticles/manageNewsArticlesSlice";
import { manageNewsArticlesApi } from "../features/manageNewsArticles/manageNewsArticlesApi";

export const store = configureStore({
  reducer: {
    manageNewsArticles: manageNewsArticlesReducer,
    [manageNewsArticlesApi.reducerPath]: manageNewsArticlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(manageNewsArticlesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

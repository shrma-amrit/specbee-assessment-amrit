import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsArticle } from "./types";

export const manageNewsArticlesApi = createApi({
  reducerPath: "manageNewsArticlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummy-rest-api.specbee.site/api/v1/",
  }),
  endpoints: (builder) => ({
    getAllNewsArticles: builder.query<NewsArticle[], void>({
      query: () => "news",
    }),
  }),
});

export const { useGetAllNewsArticlesQuery, useLazyGetAllNewsArticlesQuery } =
  manageNewsArticlesApi;

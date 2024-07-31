import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  HOME_PATH,
  NOT_FOUND_PATH,
  NEWS_ARTICLES_PATH,
} from "../utils/constants";
import { NewsArticles } from "../pages/NewsArticles";
import { NotFound } from "../pages/NotFound";

const AppRouter = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Navigate to={NEWS_ARTICLES_PATH} replace />,
  },
  {
    path: NEWS_ARTICLES_PATH,
    element: <NewsArticles />,
  },
  {
    path: NOT_FOUND_PATH,
    element: <NotFound />,
  },
]);

export { AppRouter };

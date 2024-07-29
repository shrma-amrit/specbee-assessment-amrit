interface NewsArticle {
  id: number;
  title: string;
}

interface NewsArticlesState {
  newsArticles: NewsArticle[];
}

export type { NewsArticle, NewsArticlesState };

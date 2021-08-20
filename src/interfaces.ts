export interface FetchedQuote {
  content?: string;
  author?: string;
}

export interface AuthorQuote {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}

export interface FetchedQuoteList {
  results: AuthorQuote[];
}

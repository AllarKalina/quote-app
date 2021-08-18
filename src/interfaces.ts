export interface QuoteProps {
  _id?: string;
  // The quotation text
  content?: string;
  // The full name of the author
  author?: string;
  // The `slug` of the quote author
  authorSlug?: string;
  // The length of quote (number of characters)
  length?: number;
  // An array of tag names for this quote
  tags?: string[];
}

export interface QuoteLis {
  // The number of quotes returned in this response
  count: number;
  // The total number of quotes matching this query
  totalCount: number;
  // The current page number
  page: number;
  // The total number of pages matching this request
  totalPages: number;
  // The 1-based index of the last result included in the current response.
  lastItemIndex: number;
  // The array of quotes
  results?: Array<{
    _id: string;
    // The quotation text
    content: string;
    // The full name of the author
    author: string;
    // The `slug` of the quote author
    authorSlug: string;
    // The length of quote (number of characters)
    length: number;
    // An array of tag names for this quote
    tags: string[];
  }>;
}

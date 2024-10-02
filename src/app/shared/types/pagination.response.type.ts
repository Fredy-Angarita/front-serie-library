export type PaginationResponse<T> = {
  totalItems: number;
  items: T[];
  limit: number;
  page: number;
};

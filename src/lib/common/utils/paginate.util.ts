export interface PaginatedResponse<T> {
  data: T[];
  limit: number;
  offset: number;
}

export const toPaginatedResult = <T>(
  data: T[],
  limit: number,
  offset: number,
): PaginatedResponse<T> => {
  return {
    data,
    limit,
    offset,
  };
};

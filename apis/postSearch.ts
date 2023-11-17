import { SearchRequest, SearchResponse } from '@/types/search.type';
import filterConverter from '@/utils/filterConverter';
import client from './client';

const postSearch = async ({ keyword, filter }: SearchRequest): Promise<SearchResponse> => {
  const filterConverted = filterConverter(filter);
  const response = await client.post(`/board/search/${filterConverted}?keyword=${keyword}`, {
    keyword,
  });
  return response.data;
};

export default postSearch;

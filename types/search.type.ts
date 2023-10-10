import { FieldType } from './question.type';

export interface SearchRequest {
  keyword: string;
  filter: string;
}

export interface SearchResponse {
  success: boolean;
  code: 200 | 403 | 404 | 500 | number;
  message: string;
  result: SearchResult[];
}

interface SearchResult {
  id: number;
  title: string;
  content: string;
  tag: string[];
  fields: FieldType[];
  postTime: string;
  hits: number;
  answerCount: number;
}

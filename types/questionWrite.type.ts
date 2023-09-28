export interface QuestionWriteRequest {
  title: string;
  content: string;
  fileIds: number[];
  field: FieldType[];
  tag: string[];
}

export type FieldType = 'BACKEND' | 'DESIGN' | 'FRONTEND' | 'MOBILE' | 'PRODUCT_MANAGER';

export interface PostQuestionWriteResponse {
  body: object;
  statusCode: string;
  statusCodeValue: number;
}

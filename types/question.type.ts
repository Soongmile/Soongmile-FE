export interface QuestionWriteRequest {
  title: string;
  content: string;
  fileIds: number[];
  field: FieldType[];
  tag: string[];
}

export type FieldType = 'BACKEND' | 'DESIGN' | 'FRONTEND' | 'MOBILE' | 'PRODUCT_MANAGER' | 'SCHOOL';

export interface PostQuestionWriteResponse {
  body: object;
  statusCode: string;
  statusCodeValue: number;
}

export interface AnswerType {
  id: number;
  content: string;
  postTime: string;
  memberId: number;
  memberName: string;
  likes: number;
}

export interface GetQuestionResponse {
  title: string;
  content: string;
  field: FieldType[];
  tag: string[];
  memberId: number;
  memberName: string;
  postTime: string;
  hits: number;
  likes: number;
  answerList: AnswerType[];
  imageUrls: string[];
}

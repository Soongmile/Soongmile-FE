export interface AnswerWriteRequest {
  questionId: number;
  content: string;
  fileIds: number[];
}

export interface PostAnswerWriteResponse {
  body: object;
  statusCode: string;
  statusCodeValue: number;
}

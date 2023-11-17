export interface SigninRequest {
  email: string;
  password: string;
}

export interface SiginResponse {
  success: boolean;
  code: 200 | 404 | 403 | 500 | number;
  message: string;
  result: ResultType;
}

export interface AuthAtom {
  token: string;
  userName: string;
}

export interface ResultType {
  token: string;
  memberName: string;
}

export interface UserSignupRequest {
  email: string;
  membername: string;
  password: string;
  passwordchecker: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

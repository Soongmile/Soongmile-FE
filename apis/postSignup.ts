import { UserSignupRequest } from '@/types/user.type';
import client from './client';

const postSignUp = async ({
  email,
  membername,
  password,
  passwordchecker,
}: UserSignupRequest): Promise<UserSignupRequest> => {
  const response = await client.post('/user/join', {
    email,
    membername,
    password,
    passwordchecker,
  });
  return response.data;
};

export default postSignUp;

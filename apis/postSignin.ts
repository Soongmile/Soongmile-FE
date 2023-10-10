import { SiginResponse, SigninRequest } from '@/types/signin.type';
import client from './client';

const postSignin = async ({ email, password }: SigninRequest): Promise<SiginResponse> => {
  const response = await client.post('/user/login', {
    email,
    password,
  });
  return response.data;
};

export default postSignin;

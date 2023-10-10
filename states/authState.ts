import { AuthAtom } from '@/types/signin.type';
import { atom } from 'recoil';

const authState = atom<AuthAtom>({ key: 'authState', default: { token: '', userName: '' } });

export default authState;

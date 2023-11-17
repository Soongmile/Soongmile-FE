import { atom } from 'recoil';

const currentState = atom<string>({ key: 'currentState', default: '전체' });

export default currentState;

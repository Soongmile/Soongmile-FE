import { atom } from 'recoil';

const sideBarState = atom<string>({ key: 'sideBarState', default: '/' });

export default sideBarState;

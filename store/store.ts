import { create } from 'zustand';

interface globalStore {
    activeMenu: boolean;
    setActiveMenu: (menu: boolean) => void;
    screenSize: any;
    setScreenSize: (size: any) => void;
}

export const globalStore = create<globalStore>((set) => ({
    // state
    activeMenu: true,
    screenSize: undefined,
    // action
    setActiveMenu: (menu) => {
        set({ activeMenu: menu });
    },
    setScreenSize: (screenSize) => {
        set({ screenSize });
    },
}));

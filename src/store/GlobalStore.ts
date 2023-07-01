import { create } from 'zustand';

type THEME = 'dark' | 'light';

interface GlobalStoreState {
  theme: THEME;
  toggleTheme: () => void;
}

export const GlobalStore = create<GlobalStoreState>((set) => ({
  theme: 'dark',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));

type ToastMessage = {
  message: string | undefined;
  type: 'success' | 'error' | 'warning';
};

interface IToastMessage {
  toast: ToastMessage;
  setToastMessage: (message: ToastMessage) => void;
}

export const useToastMessage = create<IToastMessage>((set) => ({
  toast: {
    message: undefined,
    type: 'success',
  },
  setToastMessage: (toast) => set(() => ({ toast })),
}));

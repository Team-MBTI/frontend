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
  message: ToastMessage;
  setToastMessage: (message: ToastMessage) => void;
}

export const useToastMessage = create<IToastMessage>((set) => ({
  message: {
    message: undefined,
    type: 'success',
  },
  setToastMessage: (message) => set(() => ({ message })),
}));

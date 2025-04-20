import {create} from 'zustand';
import {colors} from '../theme/colors';

type AppState = {
    theme: 'light' | 'dark';
    language: string;
    colors: typeof colors.light | typeof colors.dark;
    setTheme: (theme: 'light' | 'dark') => void;
    setLanguage: (language: string) => void;
};

export const useStore = create<AppState>((set) => ({
    theme: 'light',
    language: 'tr',
    colors: colors.light,
    setTheme: (theme) =>
        set(() => ({
            theme,
            colors: theme === 'light' ? colors.light : colors.dark,
        })),
    setLanguage: (language) => set(() => ({language})),
}));

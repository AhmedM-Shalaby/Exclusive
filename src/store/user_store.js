import Cookies from 'js-cookie';
import { create } from 'zustand'

export const useUserStore = create((set) => ({
    token: null,
    setToken: (newToken) => set(state => ({ token: newToken })),
    initTokenFromCookie: () => {
        const token = Cookies.get('token');
        if (token) {
            set({ token });
        }
    },
}))

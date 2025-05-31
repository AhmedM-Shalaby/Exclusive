import { create } from "zustand";

export const useSearch = create((set) => ({
    isSearch: false,
    setIsSearch: (newValue) => {
        set({
            isSearch: newValue
        })
    }
}))

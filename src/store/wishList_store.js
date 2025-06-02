

import addToWishlist from '@/app/actions/wishlist/addToWishList';
import deleteWishList from '@/app/actions/wishlist/deleteToWishlist';
import getUserWishlist from '@/app/actions/wishlist/getUserWishlist';
import { toast } from 'react-toastify';
import { create } from 'zustand'

export const useWishListStore = create((set) => ({
    activeIds: [],
    count: 0,
    fetchWishList: async (token) => {
        try {
            const res = await getUserWishlist(token);
            set({
                activeIds: Array.isArray(res.data?.items) ? res.data.items.map((item) => item._id) : [],
                count: res.results,
            });
        } catch (err) {
            console.error("Error fetching wishlist:", err);
        }
    },
    addProduct: async (id, token) => {
        const res = await addToWishlist(id, token)
        toast.success(res.message)
        set({
            activeIds: res.data.items.map((item) => item._id),
            count: res.results,
        });
    },
    removeProduct: async (id, token) => {
        const res = await deleteWishList(id, token)
        toast.success(res.message)
        set({
            activeIds: res.data.items.map((item) => item._id),
            count: res.results,
        });
    }
}));

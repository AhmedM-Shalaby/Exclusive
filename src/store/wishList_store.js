

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
            const wishList = await getUserWishlist(token);
            set({
                activeIds: wishList.data.map((item) => item.id),
                count: wishList.count,
            });
        } catch (err) {
            console.error("Error fetching wishlist:", err);
        }
    },
    addProduct: async (id, token) => {
        const res = await addToWishlist(id, token)
        toast.success(res.message, {
            autoClose: 500
        })
        set(state => {
            return {
                count: state.count + 1,
                activeIds: [...state.activeIds, id]
            }
        })
    },
    removeProduct: async (id, token) => {
        const res = await deleteWishList(id, token)
        toast.success(res.message, {
            autoClose: 500
        })
        set(state => {
            const newActiveIds = state.activeIds.filter(active => active !== id)
            return {
                activeIds: newActiveIds,
                count: state.count - 1,
            }
        })
    }

}));

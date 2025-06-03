

import addToWishlist from '@/app/actions/wishlist/addToWishList';
import deleteWishList from '@/app/actions/wishlist/deleteToWishlist';
import getUserWishlist from '@/app/actions/wishlist/getUserWishlist';
import { toast } from 'react-toastify';
import { create } from 'zustand'

export const useWishListStore = create((set, get) => ({
    activeIds: [],
    count: 0,
    isLoading: false,
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
        const { isLoading } = get();
        if (isLoading) return;
        const toastId = toast.loading("Adding to wishlist...");
        set({ isLoading: true });
        try {
            const res = await addToWishlist(id, token);
            set({
                activeIds: res.data.items.map((item) => item._id),
                count: res.results,
            });

            toast.update(toastId, {
                render: res.message || "Added successfully",
                type: "success",
                isLoading: false,
                autoClose: 1500,
                closeOnClick: true,
            });
        } catch (err) {
            toast.update(toastId, {
                render: "Error adding to wishlist",
                type: "error",
                isLoading: false,
                autoClose: 1500,
                closeOnClick: true,
            });
        }
        finally {
            set({ isLoading: false });
        }
    },
    removeProduct: async (id, token) => {
        const { isLoading } = get();
        if (isLoading) return;
        const toastId = toast.loading("Removing from wishlist...");
        set({ isLoading: true });
        try {
            const res = await deleteWishList(id, token);
            set({
                activeIds: res.data.items.map((item) => item._id),
                count: res.results,
            });

            toast.update(toastId, {
                render: res.message || "Removed successfully",
                type: "success",
                isLoading: false,
                autoClose: 1500,
                closeOnClick: true,
            });
        } catch (err) {
            toast.update(toastId, {
                render: "Error removing from wishlist",
                type: "error",
                isLoading: false,
                autoClose: 1500,
                closeOnClick: true,
            });
        }
        finally {
            set({ isLoading: false });
        }
    },
}));

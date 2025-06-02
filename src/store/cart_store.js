import clearUserCart from '@/app/actions/cart/clearUserCart';
import getUserCart from '@/app/actions/cart/getCart';
import { toast } from 'react-toastify';
import { create } from 'zustand'

export const useCartStore = create((set) => ({
    numOfCartItems: 0,
    productsEdit: [],
    fetchCart: async (token) => {
        try {
            const res = await getUserCart(token);
            set({
                numOfCartItems: res.numOfCartItems,
            });
        } catch (err) {
            console.error("Error fetching Cart:", err);
        }
    },
    setNumOfCartItems: (newNum) => {
        set({
            numOfCartItems: newNum,
        }
        )
    },
    setProductsEdit: (newObj) => {
        set((state) => {
            const findItem = state.productsEdit.find(({ productID }) => productID == newObj.productID)
            const UpdateExitesItem = state.productsEdit.map(item => item.productID == findItem?.productID ? newObj : item)
            const AddNewItem = [...state.productsEdit, newObj]
            return {
                productsEdit: findItem ? UpdateExitesItem : AddNewItem
            }
        });
    },
    clearEdit: () => {
        set({ productsEdit: [] });
    },
    deleteUserCart: async (token) => {
        try {
            const cart = await clearUserCart(token);
            toast.success(cart.message)
            set({
                numOfCartItems: 0,
            });
        } catch (err) {
            console.error("Error fetching Cart:", err);
        }
    },
}));

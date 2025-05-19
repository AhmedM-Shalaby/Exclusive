

import addToCart from '@/app/actions/cart/addToCart';
import clearUserCart from '@/app/actions/cart/clearUserCart';
import getUserCart from '@/app/actions/cart/getCart';
import removeProductToCart from '@/app/actions/cart/removeProductToCart';
import { toast } from 'react-toastify';
import { create } from 'zustand'

export const useCartStore = create((set) => ({
    numOfCartItems: 0,
    productsEdit: [],
    fetchCart: async (token) => {
        try {
            const res = await getUserCart(token);
            console.log("get ", res);

            set({
                numOfCartItems: res.numOfCartItems,
            });
        } catch (err) {
            console.error("Error fetching Cart:", err);
        }
    },
    AddToCart: async (body, token) => {
        try {
            const res = await addToCart(body, token);
            console.log("add ", res);

            toast.success(res.message);
            set(state => {
                return {
                    numOfCartItems: res.numOfCartItems,
                }
            });
        }
        catch (err) {
            console.error("Error fetching Cart:", err);
        }
    },
    deleteProduct: async (ProductID, token) => {
        try {
            const res = await removeProductToCart(ProductID, token);
            console.log("remove ", res);
            toast.success("Success");
            set(state => {
                return {
                    numOfCartItems: res.numOfCartItems,
                }
            });
        }
        catch (err) {
            console.error("Error fetching Cart:", err);
        }

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

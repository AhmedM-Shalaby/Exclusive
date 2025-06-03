import addToCart from '@/app/actions/cart/addToCart';
import clearUserCart from '@/app/actions/cart/clearUserCart';
import getUserCart from '@/app/actions/cart/getCart';
import removeProductToCart from '@/app/actions/cart/removeProductToCart';
import { toast } from 'react-toastify';
import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
    numOfCartItems: 0,
    productsEdit: [],
    isClick: false,
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
    fireActionAdd: async (Body, token) => {
        const { isClick } = get();
        if (isClick) return
        const toastId = toast.loading("Adding to Cart...");
        set({ isClick: true });
        try {
            const res = await addToCart(Body, token)
            set({ numOfCartItems: res.numOfCartItems })
            toast.update(toastId, {
                render: res.message || "Added successfully",
                type: "success",
                isLoading: false,
                autoClose: 2000,
                closeOnClick: true,
            });
        }
        catch (err) {
            toast.update(toastId, {
                render: err.message || "Error Add To Cart",
                type: "error",
                isLoading: false,
                autoClose: 2000,
                closeOnClick: true,
            });
        }
        finally {
            set({ isClick: false })
        }
    },
    fireActionRemove: async (productID, token) => {
        const { isClick } = get()
        if (isClick) return
        const toastId = toast.loading("Removing to Cart...");
        set({ isClick: true });
        try {
            const res = await removeProductToCart(productID, token);
            set({ numOfCartItems: res.numOfCartItems })
            toast.update(toastId, {
                render: res.message || "remove successfully",
                type: "success",
                isLoading: false,
                autoClose: 2000,
                closeOnClick: true,
            });

        }
        catch (err) {
            toast.update(toastId, {
                render: err.message || "Error Add To Cart",
                type: "error",
                isLoading: false,
                autoClose: 2000,
                closeOnClick: true,
            });
        }
        finally { }
    }
}));

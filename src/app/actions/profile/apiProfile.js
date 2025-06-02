"use server"
import { fetchServerData } from "@/utils/httpHelper";
import { revalidateTag } from "next/cache";
export const UpdateLoggedUserData = async (values, token) => {
    const ENDPOINT = `/users/updateMe`
    const apiOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "token": token
        },
        body: JSON.stringify(values),
    }
    const res = await fetchServerData(ENDPOINT, apiOptions);
    revalidateTag("userInfo")
    return res
}


export const UpdataUserPassword = async (values, token) => {
    const ENDPOINT = `/users/changeMyPassword`
    const apiOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "token": token
        },
        body: JSON.stringify(values),
    }
    const res = await fetchServerData(ENDPOINT, apiOptions);
    revalidateTag("userInfo")
    return res
}




export const getInFoUser = async (token) => {
    const ENDPOINT = `/users/getProfile`
    const apiOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": token
        },
    }
    const res = await fetchServerData(ENDPOINT, apiOptions, ["userInfo"]);

    return res
}

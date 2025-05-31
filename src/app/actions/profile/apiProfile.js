"use server"
import { fetchServerData } from "@/utils/httpHelper";

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
    return res
}

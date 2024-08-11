import axios from "axios";

const baseURL = "http://localhost:8000"

export const apiRequest = async(method: string, url:string, data:any)=>{
    const response = await axios({
        method: method,
        url: `${baseURL}/${url}`,
        data: data
    })

    return response
}
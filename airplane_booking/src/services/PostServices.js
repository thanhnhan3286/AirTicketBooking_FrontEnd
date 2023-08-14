import axios from "axios";

export const createPost=async (post)=>{
    try{
        await axios.post("http://localhost:8080/api/post",post)
    }catch (err) {
        console.log(err)
    }
}
export const getAllEmployee=async ()=>{
    try {
        const result=await axios.get("http://localhost:8080/api/post/listEmployee")
        return result.data
    }catch (err) {
        console.log(err)
    }
}
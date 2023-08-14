import axios from "axios";
export  async function getTypeSeatById(id){
    const res =  await axios.get("http://localhost:8080/type-seat/detail/"+id)
    return res.data
}
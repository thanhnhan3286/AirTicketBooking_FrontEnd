import axios from "axios";
export  async function getRouteById(idRoute){
    const res =  await axios.get("http://localhost:8080/route/"+idRoute)
    return res.data
}
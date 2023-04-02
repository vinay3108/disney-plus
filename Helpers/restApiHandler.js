import axios from "axios"
const fetchData=async(link)=>{
   return  await fetch(`https://disney-server.onrender.com/api/v1/${link}`);
}
const postData=async(link,data)=>{
    return await axios.post(`https://disney-server.onrender.com/api/v1/${link}`,data);
}
export{
    fetchData,
    postData
}
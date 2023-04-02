import axios from "axios"
const fetchData=async(link)=>{
   return  await fetch(`https://disney-server.onrender.com/api/v1/${link}`);
}

export{
    fetchData
}
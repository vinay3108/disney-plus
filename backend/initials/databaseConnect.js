const mongoose = require("mongoose");

const mongoConnect=()=> {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
    .then(()=>{
        console.log("DB CONNECTED");
    })
    .catch((err)=>{
        console.log(err.message);
    })
}


module.exports=mongoConnect;
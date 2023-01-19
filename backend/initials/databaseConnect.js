const mongoose = require("mongoose");

const mongoConnect=()=> {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_URL||"mongodb+srv://vinay:vinay@cluster0.skr9h.mongodb.net/disney?retryWrites=true&w=majority",{useNewUrlParser:true})
    .then(()=>{
        console.log("DB CONNECTED");
    })
    .catch((err)=>{
        console.log(err.message());
    })
}


module.exports=mongoConnect;
const seeder = require('../config/seeder');
const Movie =require('../models/movieModel');

const seedDB=async()=>{
    await Movie.insertMany(seeder)
    .then(()=>{
        console.log("DB SEEDED");
    })
    .catch((err)=>{
        console.log(err);
    })
    
}
module.exports=seedDB;
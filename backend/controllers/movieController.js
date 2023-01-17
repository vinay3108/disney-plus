const Movie =require('../models/movieModel');

exports.getAllMovies=async(req,res)=>{
    const movies=await Movie.find();
    res.status(200).json({
        movies
    })
}
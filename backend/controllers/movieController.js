const Movie =require('../models/movieModel');

exports.getAllMovies=async(req,res)=>{
    const movies=await Movie.find();
    res.status(200).json({
        movies
    })
}

exports.getMovie=async(req,res)=>{
  const {id} = req.params;
  const movie = await Movie.findById(id);
  res.status(200).json({movie});
}


exports.deleteAllMovie=async(req,res)=>{
  await Movie.deleteMany({});
  res.status(200).json({
    success:'ok'
  })
}
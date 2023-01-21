const express=require('express');
const router=express.Router();
const {getAllMovies,getMovie,deleteAllMovie} =require('../controllers/movieController');
router.route('/movies').get(getAllMovies).delete(deleteAllMovie);
router.route("/movies/:id").get(getMovie);




module.exports=router;
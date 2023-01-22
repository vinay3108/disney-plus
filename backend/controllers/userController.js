const mongoose = require('mongoose');
const User =require('../models/userModel');
const Movie=require('../models/movieModel');
const ErrorHandler =require('../utils/errorHandler');



exports.createUser=async(req,res)=>{
 const user=await User.create(req.body);
 res.status(200).json({user});
}

exports.loginUser=async(req,res,next)=>{
    const { email, password } = req.body;
    if ( !email || !password )
    {
        return next( new ErrorHandler( "Please Enter Email & Password", 400 ) )
    }
    const user = await User.findOne( { email } ).select( "+password" );

    if ( !user )
    {
        return next( new ErrorHandler( "invalid Email or Password", 401 ) );

    }
    const isPasswordMatched = await user.comparePassword( password );
    if ( !isPasswordMatched )
    {
        return next( new ErrorHandler( "invalid Email or Password", 401 ) );
    }
    res.status(200).json({ user })
}

exports.addWatchList=async(req,res,next)=>{
    try{
        const{uid}=req.body;
        const {mid}=req.params;
        const user=await User.findById(uid);
        const movie=await Movie.findById(mid);
        await user.movies.push(movie);
        await user.save();
        res.status(200).json({code:"true"})
    } catch(err){
        console.log(err);
    }
}

exports.removeWatchList=async(req,res)=>{
    try{
        const{uid}=req.body;
        const {mid}=req.params;
        const user= await User.findByIdAndUpdate(uid,{$pull:{movies:mid}}); 
        await user.save();
        res.status(200).json({code:"true"})
    } catch(err){
        console.log(err);
    }
}

exports.getUsers=async(req,res)=>{
    const {uid}=req.params;

    if(!uid){
        const user=await User.find();
       return res.status(200).json({user});
    }

    const user=await User.findById(uid).populate('movies');
    return res.status(200).json({user});
}
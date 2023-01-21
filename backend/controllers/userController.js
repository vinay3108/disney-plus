const mongoose = require('mongoose');
const User =require('../models/userModel');
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
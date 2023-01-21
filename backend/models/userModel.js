const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const Movie=require('./movieModel');
const jwt=require('jsonwebtoken');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please write your name"],
        maxlength: [ 30, "Name Cannot exceed 30 characters" ],
        minlength: [ 4, "Name Should have 4 characters" ],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [ true, "Please Enter Your Password" ],
        minlength: [ 4, "Password Should be Greater than 8 Characters " ],
        select: false,
    },
    role: {
        type: String,
        default: 'user',
    },
    movies:[
        {
            type: mongoose.Schema.ObjectId,
            ref:"Movie"
        }
    ],
    createdAt: {
        type: Date,
        default:Date.now,
    },
})

userSchema.pre( 'save', async function ( next )
{
    if ( !this.isModified( 'password' ) )
    {
        next();
    }
    this.password = await bcrypt.hash( this.password, 10 );
} )

//JWT Token
userSchema.methods.getJWTToken = function ()
{
    return jwt.sign( { id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    } );
}


//Compare Password
userSchema.methods.comparePassword = async function ( enteredPassword ){
    return await bcrypt.compare( enteredPassword, this.password );
}

module.exports = mongoose.model('User', userSchema );
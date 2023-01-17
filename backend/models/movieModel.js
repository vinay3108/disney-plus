const mongoose=require('mongoose');

const movieSchema = mongoose.Schema({
    backgroundImg:{
        type:String,
        required:[true,"please enter background image url"]
    },
    cardImg:{
        type:String,
        required:[true,"please enter card image url"]
    },
    description:{
        type:String,
    },
    subTitle:{
        type:String,
        required:[true,"please enter subtitle"]
    },
    title:{
        type:String,
        required:[true,"please enter title"]
    },
    titleImg:{
        type:String,
        required:[true,"please enter title image url"]
    },
    type:{
        type:String,
        required:[true,"please enter type"]
    },

})

const Movie=mongoose.model('Movie',movieSchema);
module.exports=Movie;
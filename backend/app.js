const express=require('express');
const app=express();
app.use(express.json());

const movieRoutes=require('./routes/movieRoutes')
app.use('/api/v1',movieRoutes);
module.exports=app;
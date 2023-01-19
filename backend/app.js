const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server is running');
})
app.use(cors({
    origin: '*'
}));

const movieRoutes=require('./routes/movieRoutes')
app.use('/api/v1',movieRoutes);
module.exports=app;
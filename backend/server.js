const app=require('./app');
const mongoConnect=require('./initials/databaseConnect');
const dotenv=require('dotenv');
// const seedDB =require('./initials/dbSeeder');

if(process.env.NODE_ENV!=='production'){
    dotenv.config({path:'config/.env'});
}
//connecting to DB
mongoConnect();



//Require only one time for seeding DB
// seedDB();



const server=app.listen(4000,()=>{
    console.log(`server running on port 4000`);
})
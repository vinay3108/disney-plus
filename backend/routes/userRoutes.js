const express=require('express');
const router=express.Router();
const {createUser,loginUser,addWatchList}=require('../controllers/userController')
router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/add/:mid').post(addWatchList);


module.exports=router;
const express=require('express');
const router=express.Router();
const {createUser,loginUser,addWatchList,getUsers,removeWatchList}=require('../controllers/userController')
router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/add/:mid').post(addWatchList).delete(removeWatchList);
router.route('/user/:uid?').get(getUsers);

module.exports=router;
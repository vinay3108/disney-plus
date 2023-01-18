import { NextApiRequest,NextApiResponse } from "next";
const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default function(req:NextApiRequest, res:NextApiResponse){
    res.json({
        message:'ok'
    }); 
}
const express=require('express');
const LISTS = require('../modals/lists');
const listRouter=express.Router();
const CUSTOMERS=require('../modals/customer')

listRouter.route('/')
.get(async(req,res,next)=>{
    const list=await LISTS.find({});
    return res.status(200).json({success:true,data:list});
})
listRouter.route('/getlistbyid')
.post(async(req,res,next)=>{
    const {listid}=req.body;
    const list=await LISTS.findOne({_id:listid}).populate("customers");
    return res.status(200).json({success:true,data:list});

})

listRouter.route('/addNewList')
.post(async(req,res,next)=>{
    const {listName}=req.body;

    const list=await LISTS.create({name:listName});
    return res.status(200).json({success:true});
    
})
module.exports=listRouter;
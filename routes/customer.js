const express=require('express');
const CUSTOMERS = require('../modals/customer');
const LISTS = require('../modals/lists');
const customerRouter=express.Router();

customerRouter.route('/')
.post(async(req,res,next)=>{
    const {firstName,lastName,email,listid,phoneNumber}=req.body;
    const newCustomer={
        firstName:firstName,
        lastName:lastName,
        email:email,
        lists:[listid],
        phoneNumber:phoneNumber
    }
    console.log(newCustomer)
    const customer=await CUSTOMERS.create(newCustomer);
    const list=await LISTS.findOneAndUpdate({_id:listid},{$push:{customers:customer._id}})

    return res.status(200).json({success:true});



})
module.exports=customerRouter;
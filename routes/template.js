const express=require('express');
const TEMPLATES = require('../modals/templates');
const templateRouter=express.Router();


templateRouter.route('/get-templates')
.get(async(req,res,next)=>{
    const templates=await TEMPLATES.find({});
    return res.status(200).json({success:true,data:templates})
})
module.exports=templateRouter;
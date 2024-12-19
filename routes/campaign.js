const express=require("express");
const CAMPAIGNS = require("../modals/campaigns");
const campaignRouter=express.Router();
const {kafka} =require('../config/kafka')

campaignRouter.route('/create-campaign')
.post(async(req,res,next)=>{
    const {name}=req.body;
    console.log(name)
    const newCampaign=await CAMPAIGNS.create({name:name,status:"draft"});
    return res.status(200).json({success:true,data:newCampaign._id})
})
campaignRouter.route('/get-campaigns')
.get(async(req,res,next)=>{
    const campaign=await CAMPAIGNS.find({});
    return res.status(200).json({success:true,data:campaign})
})

campaignRouter.route('/update-campaign')
.post(async(req,res,next)=>{
    const {campaignid,lists}=req.body;
    
    const updateCampaign=await CAMPAIGNS.findOneAndUpdate({_id:campaignid},{lists:lists});
    return res.status(200).json({success:true,campaign:updateCampaign})


})
campaignRouter.route('/update-campaign-subject')
.post(async(req,res,next)=>{
    const {campaignid,subject}=req.body;
    
    const updateCampaign=await CAMPAIGNS.findOneAndUpdate({_id:campaignid},{subject:subject});
    return res.status(200).json({success:true,campaign:updateCampaign})


})
campaignRouter.route('/update-campaign-template')
.post(async(req,res,next)=>{
    const {campaignid,template}=req.body;
    
    const updateCampaign=await CAMPAIGNS.findOneAndUpdate({_id:campaignid},{template:template});
    return res.status(200).json({success:true,campaign:updateCampaign})


})

campaignRouter.route('/send-campaign')
.post(async(req,res,next)=>{
    const {scheduleForNow,time,campaignid}=req.body;

    if(scheduleForNow===true){
        const updateCampaign=await CAMPAIGNS.findOneAndUpdate({_id:campaignid},{status:"sent",time:null},{new:true});
        const producer = kafka.producer();
        await producer.connect();
  console.log("Producer Connected Successfully");
  await producer.send({
    topic: "promotion",
    messages: [
      {
        partition:0,
        key: "promotion-message",
        value: JSON.stringify({ campaignid:updateCampaign.id}),
      },
    ],
  });
  await producer.disconnect();
    }
    else{
        const updateCampaign=await CAMPAIGNS.findOneAndUpdate({_id:campaignid},{status:"scheduled",time:time})
    }
    return res.status(200).json({success:true});
})
module.exports=campaignRouter;
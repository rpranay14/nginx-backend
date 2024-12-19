const express=require('express');
const whatsappRouter=express.Router()

whatsappRouter.route('/')
.get(async(req,res,next)=>{
console.log(req.body,"request")
const mode = req.query['hub.mode'];
const token = req.query['hub.verify_token'];
const challenge = req.query['hub.challenge'];

if (mode && token) {
  if (mode === 'subscribe' && token === 'pranay14') {
    // Respond with the challenge to verify
    console.log('Webhook Verified');
    res.status(200).send(challenge);
  } else {
    // Respond with '403 Forbidden' if verify token is invalid
    res.status(403).send('Verification failed');
  }
}
})
.post(async(req,res,next)=>{
    console.log(req.body.entry[0].changes,"request")
})

module.exports=whatsappRouter;
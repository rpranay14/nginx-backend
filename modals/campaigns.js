const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const campaignSchema=new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USERS"
    },
    subject:{
        type:String
    },
    lists:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LISTS"
    }],
    status:{
        type:String
    },
    template:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TEMPLATES"
    },
    time:{
        type:Number
    }

},{
    timestamps:true
})
const CAMPAIGNS=mongoose.model("CAMPAIGNS",campaignSchema);
module.exports=CAMPAIGNS
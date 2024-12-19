const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const listSchema=new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },

    customers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CUSTOMERS"
    }],  

},{timestamps:true})

const LISTS=mongoose.model("LISTS",listSchema);
module.exports=LISTS;
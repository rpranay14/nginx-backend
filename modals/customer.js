const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const customerSchema=new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    email:{
        type:String
    },
    lists:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LISTS"
    }]
},{
    timestamps:true
})
const CUSTOMERS=mongoose.model("CUSTOMERS",customerSchema);
module.exports=CUSTOMERS;
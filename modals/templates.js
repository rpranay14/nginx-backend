const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const templateSchema=new Schema({
    name:{
        type:String
    },
    htmlContent:{
        type:String
    },
    thumbLink:{
        type:String
    }
})
const TEMPLATES=mongoose.model("TEMPLATES",templateSchema)
module.exports=TEMPLATES;
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    userEmail:
    {
        type:String,
        unique:true,
        required:true
    },
    phone:
    {
        type:Number,
        required:true,
        unique:true,
        minLength:10,
        maxLength:10
    },
    password:
    {
        type:String,
        required:true,
        minLength:10
    }
},
{
    timestamps:true
});


module.exports=mongoose.model("UserModel",userSchema);

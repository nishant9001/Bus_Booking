const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const dbconnection=async()=>
{
const connect=mongoose.connect(process.env.MONGO_DB,()=>
{
    console.log("Database Connected ");
}).catch((err)=>
{
    console.log(err.message);
});
};

module.exports=dbconnection;
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const dbconnection=async()=>
{
try{
    const connect=await mongoose.connect(process.env.MONGO_DB);
    //console.log(connect.connection.name);
    console.log("Database Connected ");
}
catch(err)
{
    console.log(err.message);
};
};

module.exports=dbconnection;
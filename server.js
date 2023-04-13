const dotenv=require("dotenv");
dotenv.config();
const express=require("express");
const routes=require("./Routes/routes");
const db=require("./config/db_connection");
const app=express();

db();
app.use("/api",routes);
app.get("/",(req,res)=>
{
    try{
      res.status(200).send("<h1> Welcome to Booking Service </h1>");
    }
    catch(err)
    {
        res.status(400).send(err.message);
    }
})
app.listen(process.env.PORT,()=>
{
    console.log("Server is listening to port 3001");
});
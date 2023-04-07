const mongoose=require("mongoose");

const Booking_Schema= new mongoose.Schema({
  name:
  {
   type:String,
   required:true
  } , 
  contact:
  {
    type:String,
    required:true
  },
   Bus_Id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bus_Model",
        required:true
    },
    seats:[
      {
        seat_id:
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"seat_Model",
          required:true
        }
      }
    ]
    
    })

    module.exports=mongoose.model("Booking_Model",Booking_Schema);
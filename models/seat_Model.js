const mongoose=require("mongoose");

const Seat_schema = new mongoose.Schema({
    Name:
    {
        type:String,
        default:""
    },
    Contact:
    {
        type:String,
        default:""
    },
    Seat_No :
    {
        type:Number,
        required:true
    },
     is_Booked :
     {
        type:Boolean,
        default:false
     },
     seat_Price:
     {
        type:String,
        default:"Min price"
     }

})

module.exports = mongoose.model("Seat_Model",Seat_schema);
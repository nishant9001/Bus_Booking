const express=require("express");
const Router=express.Router();
const user=require("./user_routes/user");
const bus=require("./bus_routes/bus");

Router.use(express.json());
Router.use(
    express.urlencoded({
      extended: true,
    })
  );

// user related routing
Router.use("/user",user);

// bus related routing
Router.post("/bus",bus);

// seat related routing
//Router.use("/seat",seat_controller);

// booking related routing
//Router.use("/booking",booking_controller);

module.exports=Router;



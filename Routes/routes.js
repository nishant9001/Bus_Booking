const express=require("express");
const Router=express.Router();

Router.use(express.json());
Router.use(
    express.urlencoded({
      extended: true,
    })
  );

// bus related routing
//Router.post("/bus",bus_controller);

// seat related routing
//Router.use("/seat",seat_controller);

// booking related routing
//Router.use("/booking",booking_controller);

module.exports=Router;



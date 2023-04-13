const User=require("../models/user_Model");
const bcrypt=require("bcrypt");
//@desc get users
//@route GET /api/users
//@access public

const getUsers=async(req,res)=>
{
    try{
    const users=await User.find();
    res.status(200).json({message:true,result:users});
    }
    catch(err)
    {
        res.status(400).json({message:false,result:err.message});
    }
};

//@desc get user
//@route GET /api/user/:id
//@access public
const getUser=async(req,res)=>
{
    try{
    const id=req.params.id;
    const user=await User.findById(id);
    res.status(200).json({message:true,result:user});
    }
    catch(err)
    {
        res.status(400).json({message:false,result:err.message});
    }
}


//@desc create user
//@route POST/api/user
//@access public
const createUser=async(req,res)=>
{
    try{
    const {userEmail,phone,password}=req.body;
    const hash=await bcrypt.hash(password,10);   
    const user=await User.create({userEmail,phone,password:hash}); 
    res.status(200).json({message:true,result:user});
    }
    catch(err)
    {
        res.status(400).json({message:false,result:err.message});
    }
}

//@desc update user
//@route PUT /api/user
//@access public
const updateUser=async(req,res)=>
{
    try{
      const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.status(200).json({message:true,"result":user});
    }
    catch(err)
    {
        console.log(err.message);
    }
}

//@desc delete user
//@route DELETE/api/user
//@access public
const deleteUser=async(req,res)=>
{
    try{
      const user=await User.findByIdAndDelete(req.params.id);
      res.status(200).json({message:true,"result":user});
    }
    catch(err)
    {
        console.log(err.message);
    }
}
module.exports={getUsers,getUser,createUser,updateUser,deleteUser};
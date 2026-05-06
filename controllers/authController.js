const User=require("../models/User")
const bcrypt=require("bcrypt")
const register=async(req,res)=>{
const {name,email,password}=req.body
const hash=await bcrypt.hash(password,10)
const user=await User.create({name,email,passwordHash:hash})
res.json(user)
}
module.exports={register}
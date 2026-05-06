const express=require("express")
const mongoose=require("mongoose")
const authRoutes=require("./routes/authRoutes")
const app=express()
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/taskdb").then(()=>console.log("MongoDB Connected")).catch(err=>console.log(err))
app.use("/api/auth",authRoutes)
app.get("/",(req,res)=>res.send("API Working"))
module.exports=app
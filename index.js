import dotenv from "dotenv";
dotenv.config();
let port = process.env.PORT || 8000
    app.get("/", (req, res)=>{
    res.send("<h1> Hii food app is running")
})
app.use("/user", userRouter)
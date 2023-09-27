const app =require("express")();
const mongoose = require("mongoose");
const { connectDatabase } = require("./database/database");

//connecting to db
mongoose.connect("mongodb+srv://nischaljoshi22:nischaljoshi22@cluster0.0wwuyec.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
console.log("Database connected Sssuccessfully")

})
//db connection function
connectDatabase()
//get api
app.get("/",(req,res)=>{
    // res.send("<h1>Hello i m from hompage </h1>")
    res.json({
        message: "success:start i am from json home pages nodemon",
        status:200
})
})
app.listen(4000,(req,res)=>{
    console.log("node js started at port 4000")
})
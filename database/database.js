const mongoose=require("mongoose")

exports.connectDatabase= async()=>{
//connecting to db
//jaba samma db sanga connect hudaina wait garr
await mongoose.connect("mongodb+srv://nischaljoshi22:nischaljoshi22@cluster0.0wwuyec.mongodb.net/?retryWrites=true&w=majority")
console.log("Database connected Successfully")
}


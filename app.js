const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");
const express = require("express")
const app = express();

//node js lai form bata data aaudai xa, db le bujh hai
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// DATABASE CONNECTION FUNCTION
connectDatabase()


// GET API -> /
app.get("/",(req,res)=>{
    res.json({
        status : 200,
        message : "Succcess"
    })
})
//get api ==> blogs (all blogs)
app.get("/blogs",async (req,res) =>{
    //getching.reading all blogs from blog model
    const blogs = await Blog.find() //findall in sequelize
    //check if blogs contains data or not
    if(blogs.length ==0){
        res.json({
            status : 400,
            message : "Empty Blogs"
        })
    }
    else{
        res.json({
            status : 204,
            message : "All Blog fetched succesfully",
            data : blogs
        })
    }
})
//get api ==> /blogs/:id (all blogs)
app.get("/blogs/:id",async (req,res) =>{
    //getching.reading all blogs from blog model
//  console.log(req.params.id)
const id = req.params.id
//const {id} =req.params alternative
const blog = await Blog.find({_id:id})
// const blog = await Blog.findById(id) --mistake
if(blog.length ==0){
    res.json({
        status : 400,
        message : "No blog found with that id"
    })
}
else{    
res.json({
    status : 203,
    message : "blog found with that id",
    data:blog
})
}
})


// CREATE BLOG API  
app.post("/createBlog",async (req,res)=>{
    console.log(req.body)

    // Insert to database logic goes here 
   await  Blog.create({
        title : req.body.title, //form title inserted into db coln 'title'
        subTitle : req.body.subTitle,
        description : req.body.description
    })


    res.json({
        status : 201,
        message : "Blog created succesfully"
    })
    // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })
})

app.listen(2000,(req,res)=>{
    console.log("node js started at port 2000")
})
import express from "express";
const port=3000;
const app =express();

app.use(express.static("public"));

app.use("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log(`Server listening on Localhost port ${port}.`);
})
import { Express } from "express";
 
const app: Express = require("express")();

app.listen(3000,()=>{
    console.log("Server running on port 3k")
})

app.get("/",(req:any,res:any)=>{
    res.send("Chal rha hai")
})



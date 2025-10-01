const express = require("express")
const route = express.Router()
let users = [];
route.get("/",(req,res)=>{
    let names = []
    for(let x of users)
    {
        names.push(x.name)
    }
    res.status(200).send(names.toString())
})
route.post("/",(req,res)=>{
    let obj = {
        id : users.length+1,
        name : req.body.name
    }
    users.push(obj)
    res.status(201).json({
        message : "User Added",
        data : obj
    })
})
route.get("/:id",(req,res)=>{
    for(x of users)
    {
        if(x.id == req.params.id)
        {
            res.status(200).send(`User with Id is ${x.name}`)
        }
    }
    res.status(200).send(`User not found , Please check your Id and Try again OR register if u are new User`)
})
module.exports = route
const express = require("express")
const route = express.Router()
let products = [];
route.get("/",(req,res)=>{
    let names = []
    for(let x of products)
    {
        names.push(x.name)
    }
    res.status(200).send(names.toString())
})
route.post("/",(req,res)=>{
    let obj = {
        id : products.length+1,
        name : req.body.name
    }
    products.push(obj)
    res.status(201).json({
        message : "Product Added",
        data : obj
    })
})
route.get("/:id",(req,res)=>{
    for(x of products)
    {
        if(x.id == req.params.id)
        {
            res.status(200).send(`Product with Id is ${x.name}`)
        }
    }
    res.status(200).send(`Product not found`)
})
module.exports = route
const express = require("express")
const app = express()
const port = 2003
const users = require("./routes/users.js")
const products = require("./routes/product.js")
const cart = require("./routes/cart.js")

app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send("Welcome To Online Shoping")
})
app.use("/users",users)
app.use("/products",products)
app.use("/cart",cart)
app.use((req,res)=>{
    res.status(404).send("Page Not Found")
})

app.listen(port,()=>{console.log(`listening at port ${port}`)})
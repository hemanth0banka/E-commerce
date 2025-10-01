const express = require("express")
const route = express.Router()
const control = require("../controllers/cartcontrol.js")
route.get("/",control.getcontrol)
route.post("/",control.postcontrol)
route.get("/:id",control.getid)
module.exports = route
const express = require("express")
const route = express.Router()
const gett = require("../controllers/userControll.js")
route.get("/",gett.getcontrol)
route.post("/",gett.postcontrol)
route.get("/:id",gett.getid)
module.exports = route
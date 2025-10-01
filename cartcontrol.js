let cart = [];
const getcontrol = (req,res)=>{
    let items = []
    for(let x of cart)
    {
        items.push(x.name)
    }
    res.status(200).send(items.toString())
}

const postcontrol = (req,res)=>{
    let obj = {
        id : cart.length+1,
        name : req.body.name
    }
    cart.push(obj)
    res.status(201).json({
        message : "Item Added",
        data : obj
    })
}

const getid = (req,res)=>{
    for(x of cart)
    {
        if(x.id == req.params.id)
        {
            res.status(200).send(`Item with Id is ${x.name}`)
        }
    }
    res.status(200).send(`Item not found`)
}

module.exports = {getcontrol,postcontrol,getid}
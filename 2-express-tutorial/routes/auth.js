const express = require("express")
const router = express.Router()

//BASE-URL = "/login"

//login
router.post("/", (req,res) => {
    const {name} = req.body

    if(name){
        res.status(200).send(`Logged In as: ${name}`)
    }
    else{
        res.status(401).send("Insert a name")
    } 
})

module.exports = router
require("dotenv").config()
const express = require("express")
const jwt = require("jsonwebtoken")
const db_conn = require("./db/conn")

//controllers
const UserController = require("./controllers/user-controller")
const PostController = require("./controllers/post-controller")

const app = express()
db_conn()

//middlewares
app.use(express.json())

app.get("/", (req, res) => {
    res.json({msg: "API para aprender JWT"})
})

app.post("/auth/register", (req, res) => {
    const username = req.body.username && req.body.username
    const password = req.body.password && req.body.password

    if(!username) {
        return res.status(400).json({success: false, msg: "Campo 'username' e 'password' são necessarios"})
    }

    if(!password) {
        return res.status(400).json({success: false, msg: "Campo 'username' e 'password' são necessarios"})
    }

    UserController.create(username, password)
    .then(user => res.status(200).json(user))
    .catch(err => res.send(500).json({success: false, msg: err}))
})

app.post("/auth/login", (req, res) => {
    console.log(req.body)

    UserController.login(req.body.username, req.body.password)
    .then(user => res.json(user))
    .catch(err => res.send(500).json({success: false, msg: err}))
})

app.listen(3000, () => console.log("Server rodando na porta 3000"))
const express = require("express")
const morgan = require('morgan')
const app = express()
const peopleRouter = require("./routes/people")
const authRouter = require("./routes/auth")

//logger
app.use(morgan(":method :url :status :total-time ms"))
//static assets
app.use(express.static("./methods-public"))
//parse-form-data (html-form)
app.use(express.urlencoded({extended: false}))
//parse-json (javascript fetch)
app.use(express.json())

//peopleRouter with base url
app.use("/api/people", peopleRouter)
//authRouter
app.use("/login", authRouter)

app.listen(8000, ()=>console.log("Servidor escutando na porta: 8000"))
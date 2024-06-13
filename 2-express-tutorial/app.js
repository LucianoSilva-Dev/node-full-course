const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Oiiii")
})

app.get("/about", (req,res) => {
    res.status(200).send("About page")
})

//qualquer verbo http, qualquer path que não exista
app.all("*", (req,res) => {
    res.status(404).send("Page not found")
})

app.listen(8000, () => console.log("Servidor escutando na porta: 8000"))
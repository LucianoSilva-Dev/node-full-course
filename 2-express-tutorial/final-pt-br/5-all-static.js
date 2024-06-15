const express = require("express")
const path = require("path")
const app = express()

//arquivos estaticos que serão uilizados pelo index.html
//assim, você não precisa fazer uma rota para cada arquivo
//por padrão, carrega o arquivo index.html quando acessar a rota "/"
app.use(express.static("./public")) 

app.all("*", (req,res) => {
    res.status(404).send("Page not found.")
})

app.listen(8000, () => console.log("Servidor escutando na porta: 8000"))
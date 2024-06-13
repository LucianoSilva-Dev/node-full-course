const http = require("http")

const server = http.createServer((req, res) => {
    console.log("evento de requisição")
    res.end("Olá, mundo!")
})

server.listen(8000, () => {
    console.log("Servidor escutando na porta 8000.")
})
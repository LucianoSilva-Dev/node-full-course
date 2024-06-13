const http = require("http")

//cria um serviodor http
const server = http.createServer();

//eventos no server
//o proprio servidor é responsavel por emitir os eventos
server.on("request", (req, res) => {
    console.log("Requisição recebida...")
    res.end()
})


server.listen(8000, () => {
    console.log("Servidor escutando na porta: 8000")
})
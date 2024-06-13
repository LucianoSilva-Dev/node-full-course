const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    // const file = fs.readFileSync("./conteudo/big-file.txt", "utf-8")
    // res.end(file)

    const fileStream = fs.createReadStream("./conteudo/big-file.txt", {encoding: 'utf-8'})

    fileStream.on("open", () => fileStream.pipe(res) /*redireciona o arquivo para o cliente em chuncks */)
    fileStream.on("error", (error) => res.end(error))
})

server.listen(8000)
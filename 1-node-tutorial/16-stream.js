const {createReadStream} = require("fs");

const stream = createReadStream("./conteudo/big-file.txt")

//padrão - 64kb por chunck
//remainder - ultimo chunck (não necessariamente 64kb)
//highWaterMark - controla o tamanho de cad chunck
// const stream = createReadStream("./conteudo/big-file.txt", {encoding: 'utf-8'})
// const stream = createReadStream("./conteudo/big-file.txt", {highWaterMark: 90000})


stream.on("data", (result) => {
    console.log(result)
})

stream.on("error", (error) => {
    console.log(error)
})
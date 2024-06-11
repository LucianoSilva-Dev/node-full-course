const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./conteudo/first.txt", "utf-8")
const second = readFileSync("./conteudo/second.txt", "utf-8")

console.log(first , "\n" , second)

writeFileSync(
    "./conteudo/resultado-sync.txt", 
    `Aqui está o resultado: ${first}, ${second}`,
    {flag: 'a'} //soma o conteudo caso já gouver um no arquivo
)
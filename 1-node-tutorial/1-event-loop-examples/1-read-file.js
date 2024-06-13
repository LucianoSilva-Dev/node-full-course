//codigo imediato é executado primeiro, depois os callbacks assincronos

const { readFile } = require("fs");

console.log("Executando a primeira tarefa")

readFile("./conteudo/first.txt", "utf-8", (err, result) => {
    if(err){
        console.log(err)
        return
    }

    console.log(`Texto do arquivo: ${result}`)
    console.log("Primeira tarefa completa")
})
console.log("Execuntando proxima tarefa")
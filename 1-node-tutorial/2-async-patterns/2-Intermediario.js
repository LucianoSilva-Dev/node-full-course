const util = require("util") 
const {writeFile, readFile} = require("fs")
//promise == função assincrona que permite o uso de await / .then, .catch
//veja o código abaixo para entender melhor

//cria uma promise apartir de uma função assincrona
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFilePromise("./conteudo/first.txt", "utf-8");
        const second = await readFilePromise("./conteudo/second.txt", "utf-8")
        await writeFilePromise("./conteudo/result-async.txt", 
                               `Incrivel : ${first}, ${second}`)  
    }

    catch (error) {
        console.log(error)
    }
    
}

start()
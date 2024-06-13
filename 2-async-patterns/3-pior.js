const {readFile} = require("fs")

//metodo mais legivel que os exemplos 10 e 11, criando Promise do 0:

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

getText('./conteudo/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))

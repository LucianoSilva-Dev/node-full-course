const {readFile, writeFile} = require("fs")

readFile("./conteudo/first.txt", "utf-8",(err, result) => {
    if(err){
        console.error(err)
        return
    }

    const first = result

    readFile("./conteudo/second.txt", "utf-8", (err, result) => {
        if(err){
            console.error(err)
            return
        }

        const second = result

        writeFile(
            "./conteudo/result-async.txt", 
            `Aqui está o resultado: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.error(err)
                    return
                }

                console.log("Aruivo criado com sucesso!")
            }
        )
        })
})
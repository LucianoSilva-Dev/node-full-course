const path = require("path")

//argumentos
function parseArgs(rawArgs) {
    let inputDirectory
    let outputDirectory = rawArgs.output ? rawArgs.output : "."
    let type //tipo de input (url, diretorio e ou arquivo)

    if(rawArgs.url){
       inputDirectory = rawArgs.url
       type = "url"
o
    }

    else if(rawArgs.directory){
        inputDirectory = rawArgs.directory
        type = "directory"
    }

    else if(rawArgs.file){
        inputDirectory = rawArgs.file
        type = "file"
    }

    return [inputDirectory, outputDirectory, type]
}

module.exports = parseArgs
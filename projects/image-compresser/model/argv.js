const path = require("path")

//argumentos
function parseArgs(args) {
    const isURLRegex = /^https?:\/\//
    
    const [input, output] = args

    let inputDirectory
    let outputDirectory = output ? output : "."
    let type //tipo de input (url, diretorio e futuramente arquivo)

    //tratamento do input
    if(input){
        if(!isURLRegex.test(input)) {
            inputDirectory = path.join(path.dirname(input), path.basename(input))
            type = "directory"
        }
        else{
            inputDirectory = input
            type = "url"
        }
        
    }

    else{
        inputDirectory = "."
        type = "directory"
    }

    return [inputDirectory, outputDirectory, type]
}

module.exports = parseArgs
const parseArgs = require("./model/argv")
const compressDir = require("./controller/compress-dir")
const compressUrl = require("./controller/compress-url")

//trata os args passados no cmd
const args = process.argv.slice(2)
const [input, outputdirectory, type] = parseArgs(args)

switch(type){
    case "directory":
        //pode retornar erros que saem do app
        compressDir(input, outputdirectory).catch(err => console.log(err))
        break

    case "url":
        compressUrl(input, outputdirectory).catch(err => console.log(err))
}
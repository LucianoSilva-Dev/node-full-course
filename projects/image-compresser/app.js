const parseArgs = require("./model/argv")

const compressDir = require("./controller/compress-dir")
const compressUrl = require("./controller/compress-url")
const compressFile = require("./controller/compress-file")

//trata os args passados no cmd
const rawArgs = require("args-parser")(process.argv)
const [input, outputdirectory, type] = parseArgs(rawArgs)

switch(type){
    case "directory":
        //pode retornar erros que saem do app
        compressDir(input, outputdirectory).catch(err => console.log(err))
        break

    case "url":
        compressUrl(input, outputdirectory)
        break
    
    case "file":
        compressFile(input, outputdirectory)
        break
}
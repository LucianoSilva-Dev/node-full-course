const sharp = require("sharp")
const fs = require("fs").promises
const path = require("path")
const { dir } = require("console")

//argumentos
const [input, output] = process.argv.slice(2)

//input URL ou arquivo
const isURLRegex = /^https?:\/\//

if(isURLRegex.test(input)){
    //implementação para o metodo de URL
}

else{
    const dirname = path.dirname(input)
    const basename = path.basename(input)
    const fileextension = path.extname(input)
    const acceptedExtensions = /^.*\.(jpg|JPG|gif|GIF|png|PNG)$/

    console.log(basename, dirname, fileextension)

    let realInput
    let type

    //ARRUMAR

    //é arquivo unico ou diretorio?
    if(basename !== "."){
        //aqui é arquivo unico
        if(fileextension.length > 0){
            realInput = basename
            type = 0 // arquivo
        }
        //diretório 
        else{
            realInput = dirname
            type = 1 //diretorio
        }
    }

    //diretório desse arquivo
    else{
        realInput = module.path
        type = 1
    }

    const compress = async () => {
        let files

        switch(type){
            case 0:
                break
            case 1:
                fs.readdir(realInput, (err, dirFiles) => {
                    if(err){
                        console.log(err)
                        return null
                    }

                    files = dirFiles
                })
                
        }

        if(files){
            console.log(files)
        }
        
    }
}
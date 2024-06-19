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
    let directory

    if(input){
        directory = path.join(path.dirname(input), path.basename(input))
    }

    else{
        directory = "."
    }
    
    const compress = async () => {
        const dir = await fs.readdir(directory)
                            .catch(err => 
                            console.log(`Não foi possivel localizar o diretório de entrada ${err.path}`))
        
        const extensionRegex = /^.*\.(jpg|JPG|gif|GIF|png|PNG)$/

        const files = dir.filter(file => extensionRegex.test(file))

        files.forEach(async (file) => {
            const fileToCompress =  await fs.readFile(path.join(directory, file))
                                          .catch(err => 
                                          console.log(`Não foi possivel ler o arquivo ${err.message}`))

            const compressedFile = await sharp(fileToCompress)
                                         .toFormat("jpeg", {
                                            progressive: true,
                                            quality: 90})
                                         .toBuffer()
            
            if(output){
                await fs.writeFile(path.join(output, file), compressedFile)
                      .catch(err => 
                      console.log(`Não foi possivel achar o diretório de saida ${path.dirname(err.path)}`))
            }
            else{
                await fs.writeFile(file, compressedFile)
            }
            
        });
    }

    compress()
}
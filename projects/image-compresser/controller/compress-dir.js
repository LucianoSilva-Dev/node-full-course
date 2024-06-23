const sharp = require("sharp")
const fs = require("fs").promises
const path = require("path")

function SharpCompressionErrorHandler(err, imageNameOrURL) {
    console.log(`Erro durante a compressão da imagem ${imageNameOrURL}\nErro: ${err.message}`)
}

async function compressDir(input, output) {
    const dir = await fs.readdir(input)
                        .catch(err => {
                            console.log(`Não foi possivel localizar o diretório de entrada ${err.path}`)
                        }) || null
    

    const extensionRegex = /^.*\.(jpg|JPG|gif|GIF|png|PNG)$/
    const files = dir ? dir.filter(file => extensionRegex.test(file)) : null
    
    if(!files){
        return console.log(
            `Não foi possivel encontrar imagens .jpg, .gif, .png no diretório ${input}`)
    }
                            
    files.forEach(async (file) => {
        const fileToCompress =  await fs.readFile(path.join(input, file))
                                      .catch(err => 
                                      console.log(`Não foi possivel ler o arquivo ${err.message}`))

        const compressedFile = await sharp(fileToCompress)
                                     .toFormat("jpeg", {
                                        progressive: true,
                                        quality: 90})
                                     .toBuffer()
                                     .catch(err => SharpCompressionErrorHandler(err, file))
        
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

module.exports = compressDir
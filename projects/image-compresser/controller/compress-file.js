const sharp = require("sharp")
const {readFileSync, writeFileSync} = require("fs")
const path = require("path")

function SharpCompressionErrorHandler(err, imageNameOrURL) {
    console.log(`Erro durante a compressão da imagem ${imageNameOrURL}\nErro: ${err.message}`)
    return
}

async function compressFile(input, output) {
    const fileName = path.basename(input)

    if(path.extname(fileName) === ""){
        return console.log("Forneça o nome do arquivo no diretório de entrada!!!")
    }

    let file
    try{
        file = readFileSync(input)
    }
    catch (e) {
        console.log(`Erro durante a leitura da imagem ${input}\n${e}`)
        return
    }

    const compressedFile = await sharp(file)
                    .toFormat("jpeg", {
                        progressive: true,
                        quality: 90})
                    .toBuffer()
                    .catch(err => SharpCompressionErrorHandler(err, input))
    
    if(output){
        try{
            writeFileSync(path.join(output, fileName), compressedFile)    
        }
        catch (e) {
            console.log(`Não foi possivel achar o diretório de saida ${path.dirname(e.path)}`)
            return
        }
                     
    }
    
    else{
        try{
            writeFileSync(fileName, compressedFile, {flag: "w"})
        }
        catch (e) {
            console.log(`Erro durante a escrita da imagem\nErro: ${e}`)
            return
        }
    }
}

module.exports = compressFile
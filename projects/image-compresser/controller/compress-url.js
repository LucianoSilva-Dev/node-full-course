const axios = require("axios")
const sharp = require("sharp")
const { createWriteStream } = require("fs");

//UTILS
function WriteStreamErrorHandler(err, output) {
    console.log(`Erro durante a escrita da imagem no diretorio ${output}\nErro: ${err.message}`)
}

function SharpCompressionErrorHandler(err, imageNameOrURL) {
    console.log(`Erro durante a compressão da imagem ${imageNameOrURL}\nErro: ${err.message}`)
}

function getImage(url, callback){
    //pega a imagem a partir de uma url
    axios({
            method: "get",
            url: url,
            responseType: "stream",
        }).then(response => callback(response))
          .catch(err => console.error(`\nErro durante o request na URL ${url}\nErro: ${err.code}`)) 
    }

function compressUrl(url, output) {
    getImage(url, (response) => {
        //cria um objeto sharp que comprime a imagem
        const compressedImage =  sharp()
        .toFormat("jpeg", {progressive: true, quality: 90})
        .jpeg()
        .on("error", (err) => SharpCompressionErrorHandler(err, url))

        //pega a stream da imagem, comprime com o objeto sharp e escreve no diretório
        response.data.pipe(compressedImage).pipe(createWriteStream(output, {flags: "w"})
        .on("error", (err) => WriteStreamErrorHandler(err, output)))
    })
}

module.exports = compressUrl
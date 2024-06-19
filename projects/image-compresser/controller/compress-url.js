const axios = require("axios")
const sharp = require("sharp")
const { createWriteStream } = require("fs");

async function compressUrl(url, output) {
    //pega a imagem a partir de uma url
    axios({
        method: "get",
        url: url,
        responseType: "stream",
      }).then((response) => {

        //cria um objeto sharp que comprime a imagem
        const compressedImage =  sharp()
                                 .toFormat("jpeg", {progressive: true, quality: 90})
                                 .jpeg()

        //pega a stream da imagem, comprime com o objeto sharp e escreve no diretório
        response.data.pipe(compressedImage).pipe(createWriteStream(output))
      });
}

module.exports = compressUrl
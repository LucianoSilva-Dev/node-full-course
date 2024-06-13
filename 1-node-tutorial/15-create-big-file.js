const {writeFileSync} = require("fs")

for(let i = 0; i < 200; i++){
    for(let j = 0; j < 200; j++){
        writeFileSync("./conteudo/big-file.txt", `Ola, mundo ${i} ${j}!\n`, {flag: 'a'})
    }
}
const path = require("path");

console.log(path.sep)

//junta paths e retorna como string
const filePath = path.join("/content/", "subfolder", "text.txt")
console.log(filePath)

const baseName = path.basename(filePath)
console.log(baseName)

const absolute = path.resolve(__dirname, "conteudo", "subpasta", "text.txt")
console.log(absolute)
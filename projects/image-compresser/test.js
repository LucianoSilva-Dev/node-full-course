const path = require("path")
const fs = require("fs").promises



console.log(path.dirname("luciano/documentos/arquivo.txt"))
console.log(path.dirname("arquivo.txt"))
console.log(path.dirname(""))
console.log(path.basename("luciano/documentos/arquivo.txt"))
console.log(path.basename("luciano/documentos/"))
console.log(path.basename(""))
console.log(path.join(".", "sl.txt"))

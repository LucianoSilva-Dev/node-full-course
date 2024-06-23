const path = require("path")
const fs = require("fs").promises



console.log(path.dirname("luciano/documentos/arquivo.txt"))
console.log(path.dirname("arquivo.txt"))
console.log(path.dirname(""))
console.log(path.basename("luciano/documentos/arquivo.txt"))
console.log(path.basename("luciano/documentos/"))
console.log(path.basename(""))
console.log(path.join(".", "sl.txt"))
console.log(path.join(path.dirname("/app/log/debug", path.basename("/app/log/debug"))))

console.log(path.resolve("C:/Usuarios/luciano/arquivo.txt", path.basename("C:/Usuarios/luciano/arquivo.txt")))
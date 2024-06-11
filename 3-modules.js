//Modules - codigo encapsulado (compartilhando apenas o minimo)
//CommonJS - todo arquivo é um módulo por padrão
const names = require("./4-names")
const SayHi = require("./5-utils")
const data = require("./6-alternative-flavor")

require("./7-some-values")

console.log(names)

SayHi("Susan")
SayHi(names.john)
SayHi(names.peter)

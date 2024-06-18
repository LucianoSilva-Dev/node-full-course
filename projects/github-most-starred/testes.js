const {verifyDateRange, verifyDateFormat, verifyDateArgs} = require("./utils")


//TESTE DE FORMATO
console.log(verifyDateFormat("2022"))
console.log(verifyDateFormat("2022-"))
console.log(verifyDateFormat("2022-1"))
console.log(verifyDateFormat("2022-10"))
console.log(verifyDateFormat("2022-10-"))
console.log(verifyDateFormat("2022-10-1"))
console.log(verifyDateFormat("2022-10-10"))

//TESTE ARGUMENTOS
 
// //node app.js 'null' 'null' -> { initial: null, final: null }
// console.log(verifyDateArgs(['null', 'null']))
// //node app.js 'null' -> { initial: null, final: null }
// console.log(verifyDateArgs(['null']))
// //node app.js -> { initial: null, final: null }
// console.log(verifyDateArgs([]))
// //node app.js YYYY-MM-DD -> { initial: 'YYYY-MM-DD', final: null }
// console.log(verifyDateArgs(['2022-02-10']))
// //node app.js YYYY-MM-DD 'null' -> { initial: 'YYYY-MM-DD', final: null }
// console.log(verifyDateArgs(['2022-02-10', 'null']))
// //node app.js 'null' YYYY-MM-DD -> { initial: 'null', final: YYYY-MM-DD }
// console.log(verifyDateArgs(['null', '2022-02-10']))
// //node app.js 'null' YYYY -> { initial: 'null', final: YYYY }
// console.log(verifyDateArgs(['null', '2022']))
// //node app.js 'null' YYYY-MM -> { initial: 'null', final: YYYY-MM }
// console.log(verifyDateArgs(['null', '2022-02']))
// //node app.js 'null' YYYY- -> Error
// console.log(verifyDateArgs(['null', '2022-']))
// //node app.js 'null' YYYY-M -> Error
// console.log(verifyDateArgs(['null', '2022-0']))
// //node app.js 'null' YYYY-MM-D -> Error
// console.log(verifyDateArgs(['null', '2022-02-1']))
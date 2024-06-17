const verifyDateRange = require("./utils")

//node app.js 'null' 'null' -> { initial: null, final: null }
console.log(verifyDateRange(['null', 'null']))
//node app.js 'null' -> { initial: null, final: null }
console.log(verifyDateRange(['null']))
//node app.js -> { initial: null, final: null }
console.log(verifyDateRange([]))
//node app.js YYYY-MM-DD -> { initial: 'YYYY-MM-DD', final: null }
console.log(verifyDateRange(['2022-02-10']))
//node app.js YYYY-MM-DD 'null' -> { initial: 'YYYY-MM-DD', final: null }
console.log(verifyDateRange(['2022-02-10', 'null']))
//node app.js 'null' YYYY-MM-DD -> { initial: 'null', final: YYYY-MM-DD }
console.log(verifyDateRange(['null', '2022-02-10']))
//node app.js 'null' YYYY -> { initial: 'null', final: YYYY }
console.log(verifyDateRange(['null', '2022']))
//node app.js 'null' YYYY-MM -> { initial: 'null', final: YYYY-MM }
console.log(verifyDateRange(['null', '2022-02']))
//node app.js 'null' YYYY- -> Error
console.log(verifyDateRange(['null', '2022-']))
//node app.js 'null' YYYY-M -> Error
console.log(verifyDateRange(['null', '2022-0']))
//node app.js 'null' YYYY-MM-D -> Error
console.log(verifyDateRange(['null', '2022-02-1']))
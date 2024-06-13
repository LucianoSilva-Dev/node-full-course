const { log } = require("console")
const os = require("os")

//informações sobre o usuario atual
console.log(os.userInfo())

//tempo do sistema em segudos
log(`The System uptime is: ${os.uptime()} seconds`)

const currentOs = {
    nome: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

log(currentOs)
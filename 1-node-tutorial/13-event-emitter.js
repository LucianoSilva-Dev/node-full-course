//classe
const EventEmitter = require("events");

const CustomEmitter = new EventEmitter()

//primeiro o evento precisa ser "escutado" para depois poder ser "emitido"
//porque você não conseguira perceber eventos já emitidos se não estava esperando por eles.
CustomEmitter.on("response", (nome, id) => {
    console.log(`Data recebida: ${nome}, ${id}`)
})

CustomEmitter.on("response", () => {
    console.log("Alguma outra lógica para o mesmo evento")
})

//evento sendo emitido com parametros personalizados
CustomEmitter.emit("response", "carlos", 25)
require("dotenv").config()
const mongoose = require("mongoose")

async function connect() {
    mongoose.connect(process.env.MONGO_CONN_STR)
    .catch(err => {throw new Error(`Erro ao se conectar com o banco: ${err}`)})
}

module.exports = connect
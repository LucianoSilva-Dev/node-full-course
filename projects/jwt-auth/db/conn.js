const mongoose = require("mongoose")
require("dotenv").config()

async function connect() {
    mongoose.connect(process.env.DB_CONN_STR)
    .catch(err => console.log(err))
}

module.exports = connect
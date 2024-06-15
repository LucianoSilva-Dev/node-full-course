const logger = (req,res,next) => {
    const url = req.url
    const method = req.method
    const time = new Date()
    console.log(method, url, `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} - ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
    next()
}

module.exports = logger
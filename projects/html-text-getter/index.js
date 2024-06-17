const cheerio = require("cheerio")
const rp = require("request-promise")

//1
const argv = process.argv.slice(2)

//2
if(!argv[0]){
    console.log("Please provide a URL, ex: node index.js www.youtube.com [CSS selector]")
    return
}
if(!argv[1]){
    console.log("Please provide a CSS selector, ex: node index.js [URL] '.content > p'")
    return
}

//3,4,5
rp(argv[0])
    .then(html => {
        const $ = cheerio.load(html)
        const text = $(argv[1]).text()
        console.log(text)
    })
    .catch(error => console.log(error))

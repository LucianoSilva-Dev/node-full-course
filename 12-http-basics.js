const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to the homepage")
    }

    if(req.url === '/about'){
        res.end("Sobre a API")
    }

    res.end(`
        <h1>Oops</h1>
        <p>Nós não conseguimos achar a página que você está procurando!!!</p>
        <a href="/">Ir para a página inicial</a>
    `)
})

server.listen(8000)
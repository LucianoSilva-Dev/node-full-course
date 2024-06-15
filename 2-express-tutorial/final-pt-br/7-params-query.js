const express = require("express")
const app = express()
const {products} = require("./data")

app.get("/", (req,res) => {
    res.send("<h1>Pagina Home: <a href='/api/products'>Produtos</a></h1>")
})

app.get("/api/products", (req,res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProducts)
})

app.get("/api/products/:id", (req,res) => {
    const {id} = req.params
    const product = products.find(product => product.id === parseInt(id))

    if(product !== undefined){
        res.json(product)
    }
    else{
        res.status(404).send("This product ID do not exists.")
    }
})

app.get("/api/v1/query", (req,res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter(product => product.name.includes(search))
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,parseInt(limit))
    }
    if(sortedProducts.length < 1){
        //res.status(200).send("No products matches your search")

        //early return                    boa pratica
        return res.status(200).json({sucsess:true, data: []})
    }

    res.status(200).json(sortedProducts)
    
})

app.listen(8000, () => console.log("Servidor escutando na porta: 8000"))
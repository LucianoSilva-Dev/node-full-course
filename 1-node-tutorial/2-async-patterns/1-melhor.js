// importa as funções read e write assincronas em forma de promise (.promises)
const {readFile, writeFile} = require("fs").promises

const start = async() => {
    try{
        const first = await readFile('./conteudo/first.txt', 'utf-8');
        const second = await readFile('./conteudo/second.txt', 'utf-8');
        await writeFile("./conteudo/result-async-revolutionary.txt", 
                               `MEU DEUS, ISSO É QUASE MAGICA: ${first}, ${second}`
        )
        console.log(first, second);
    }
    catch (error) {
        console.log(error)
    }
}
    
start()
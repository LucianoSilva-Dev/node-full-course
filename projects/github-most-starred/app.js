//carrega as variaveis do arquivo .env nesta pasta para o objeto process.env
require("dotenv").config()
const {Octokit} = require("@octokit/rest");
const verifyDateRange = require("./utils");

//autentica o usuario com o TOKEN do github
const octokit = new Octokit({auth: process.env.TOKEN})

//func. autentica o usuario
async function authUser(){
    const {data: { login }} = await octokit.rest.users.getAuthenticated();
    return login
}

authUser()
.then(user => console.log(`Olá, ${user}\n`))
.catch(err => console.log(err))

//ARRUMAR A FORMATAÇÃO DA DATA, APENAS YYYY-MM-DD
//func. retorna o repo do github com mais estrelas em uma epoca especifica
const getTopStarred = async () => {
    const argvDates = process.argv.slice(2)
    //pode resultar em erro que propositalmente sai do app
    const dates = verifyDateRange(argvDates)

    //consulta base, ocorre se date.initial e date.final forem null
    let query = "stars:>1"

    if(dates.initial && dates.final){
        query += ` created:${dates.initial}..${dates.final}`
    }
    if(dates.initial && !dates.final){
        query += ` created:>${dates.initial}`
    }
    if(!dates.initial && dates.final){
        query += ` created:<${dates.final}`
    }

    try{
        const {data: {items}} = await octokit.rest.search.repos({
            q: query,
            sort: "stars",
            order: "desc",
            per_page: 10
        });

        return items
    }

    catch (error) {
        console.log(error)
    }
}

//view -> printa o resultado bonitinho no cmd
getTopStarred()
.then(topRepos => {
      topRepos.forEach((repo, index) => {
        console.log(`${index + 1}º Repo com mais estrelas: ${repo.full_name}`)
        console.log(`Autor: ${repo.owner.name}`)
        console.log(`Estrelas: ${repo.stargazers_count}`)
        console.log(`Criado em ${repo.created_at.split("T")[0]}\n`)
    })
})
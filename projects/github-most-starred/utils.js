const dayjs = require("dayjs")
const CustomParseFormat = require("dayjs/plugin/customParseFormat")

dayjs.extend(CustomParseFormat)

function verifyDateRange(dates){
    const date1 = dayjs(dates[0])
    const date2 = dayjs(dates[1])

    if(!date1.isBefore(date2) && !date1.isSame(date2)){
        return false
    }

    return true
}

function verifyDateFormat(date) {
    return dayjs(date, ["YYYY-MM-DD", "YYYY-MM", "YYYY"], true).isValid()
}

function verifyDateArgs(dates) {
    let initialDate
    let finalDate

    //se não tem a data incial, tambem não tem a final
    //node app.js
    
    if(!dates[0]){
        initialDate = null
        finalDate = null
    }
    
    //node app.js 'null' ???
    else if(dates[0] == "null"){
        //forneceu argumentos de data, mas, como "null"
        //node app.js "null" "null"
        if(dates[1] == "null"){
            initialDate = null
            finalDate = null
        }

        //node app.js 'null' == node app.js == node app.js 'null' 'null'
        else if(!dates[1]){
            initialDate = null
            finalDate = null
        }

        //node app.js 'null' YYYY-MM-DD
        else{
            if(verifyDateFormat(dates[1]) == false){
                return console.log(`data(s) estão no formato incorreto.\nFormatos aceitos:\nYYYY-MM-DD\nYYYY-MM\nYYYY`)
            }

            else{
                initialDate = null
                finalDate = dates[1]
            }
        }
    }

    //node app.js YYYY-MM-DD ???
    else{
        //node app.js YYYY-MM-DD 'null'
        if(dates[1] == "null"){
            if(verifyDateFormat(dates[0]) == false){
                return console.log(`data(s) estão no formato incorreto.\nFormatos aceitos:\nYYYY-MM-DD\nYYYY-MM\nYYYY`)
            }

            else{
                initialDate = dates[0]
                finalDate = null
            }
        }

        //node app.js YYYY-MM-DD
        else if(!dates[1]){
            if(verifyDateFormat(dates[0]) == false){
                return console.log(`data(s) estão no formato incorreto.\nFormatos aceitos:\nYYYY-MM-DD\nYYYY-MM\nYYYY`)
            }

            else{
                initialDate = dates[0]
                finalDate = null
            }
        }

        //node app.js YYYY-MM-DD YYYY-MM-DD
        else{
            
            if(verifyDateFormat(dates[0]) == false || verifyDateFormat(dates[1]) == false){
                return console.log(`data(s) estão no formato incorreto.\nFormatos aceitos:\nYYYY-MM-DD\nYYYY-MM\nYYYY`)
            }

            else{
                initialDate = dates[0]
                finalDate = dates[1]
            }
        }
    }

    //caso não houver nenhum erro, ele verifica o intervalo das datas (se houver)
    if(initialDate && finalDate){
        //caso o intervalo for inválido, retorna null
        if(!verifyDateRange([initialDate, finalDate])){
            console.log("Intervalo de datas inválido!!!")
            return null
        }
    }

    return {initial: initialDate, final: finalDate}
}

module.exports = {verifyDateArgs, verifyDateFormat, verifyDateRange}
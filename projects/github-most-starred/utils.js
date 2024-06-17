function verifyDateFormat(date) {
    //checa se as data estão no padrão: YYYY-MM-DD
    const dateRegex = /^[0-9]{4}(-[0-1][0-9](-[0-3][0-9])*)*$/
    return dateRegex.test(date)
}

function verifyDateRange(dates) {
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

        //node app.js 'null' == node app.js == node pp.js 'null' 'null'
        else if(!dates[1]){
            initialDate = null
            finalDate = null
        }

        //node app.js 'null' YYYY-MM-DD
        else{
            if(verifyDateFormat(dates[1]) == false){
                throw new Error(`data(s) estão no formato incorreto.\nFormatos aceitos:\nYYYY-MM-DD\nYYYY-MM\nYYYY`)
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
                throw new Error(`data(s) estão no formato incorreto.\nFormatos aceitos:\nYYYY-MM-DD\nYYYY-MM\nYYYY`)
            }

            else{
                initialDate = dates[0]
                finalDate = null
            }
        }

        //node app.js YYYY-MM-DD
        else if(!dates[1]){
            if(verifyDateFormat(dates[0]) == false){
                throw new Error(`data(s) estão no formato incorreto.\nFormatos aceitos:\nYYYY-MM-DD\nYYYY-MM\nYYYY`)
            }

            else{
                initialDate = dates[0]
                finalDate = null
            }
        }
    }

    return {initial: initialDate, final: finalDate}
}

module.exports = verifyDateRange
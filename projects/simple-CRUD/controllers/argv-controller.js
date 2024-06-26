const args = require("args-parser")(process.argv)

function parseArgs() {
    //programa só aceita um argumento por vez
    if(args.new){
        if(typeof args.new === "boolean"){
            return console.log("passe um nome para o arg --new, ex: --new='Tirar lixo'")
        }
        
        return {argvType: "new", value: args.new}
    }

    else if(args.done){
        if(typeof args.done === "boolean"){
            return console.log("passe um id para o arg --done, ex: --done=A2dnxua")
        }

        return {argvType: "done", value: args.done}
    }

    else if(args.pending){
        if(typeof args.pending === "boolean"){
            return console.log("passe um id para o arg --pending, ex: --pending=A2dnxua")
        }

        return {argvType: "pending", value: args.pending}
    }

    else if(args.help){
        return {argvType: "help", value: null}
    }

    else if(args.delete){
        if(typeof args.delete === "boolean"){
            return console.log("passe um id para o arg --delete, ex: --delete=A2dnxua")
        }

        return {argvType: "delete", value: args.delete}
    }
    
    else if(args.version){
        return {argvType: "version", value: null}
    }

    else if(args.list){
        if(typeof args.list === "boolean"){
            return console.log("argumento inválido para o arg --list, use --help para ver as possiveis opções")
        }

        switch(args.list){
            case "all":
                return {argvType: "list all", value: null}

            case "done":
                return {argvType: "list done", value: null}

            case "pending":
                return {argvType: "list pending", value: null}

            default:
                return console.log("argumento inválido para o arg --list, use --help para ver as possiveis opções")
        }
    }

    //passou um argumento inválido
    else if(Object.keys(args).length > 0){
        return console.log("Argumento(s) inválidos, use --help para receber uma lista das opções possiveis")
    }

    //não passou argumento
    else{
        return console.log("use --help para receber uma lista das opções possiveis")
    }
}

module.exports = parseArgs
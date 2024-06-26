const conn = require("./db/conn")
const parseArgs = require("./controllers/argv-controller")
const TodoController = require("./controllers/todo-controller")
const showHelp = require("./utils/help")

conn()

const args = parseArgs() || null

if(args !== null){
    switch(args.argvType){
        case "new":
            TodoController.create(args.value)
            break
            
        case "done":
            TodoController.done(args.value)
            break

        case "pending":
            TodoController.pending(args.value)
            break

        case "delete":
            TodoController.delete(args.value)
            break

        case "list all":
            TodoController.list("all")
            break

        case "list done":
            TodoController.list("done")
            break

        case "list pending":
            TodoController.list("pending")
            break

        case "version":
            console.log("v1.0.0")
            break

        case "help":
            showHelp()
            break
    }
}
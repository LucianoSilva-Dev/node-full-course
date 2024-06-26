function help() {
    let help = ""
    help += "Opções:\n  --new='[value]' -> cria uma nova tarefa com o nome especificado"
    help += "\n  --done=[id] -> marca a tarefa com o id especificado como concluída"
    help += "\n  --pending=[id] -> marca a tarefa com o id especificado como pendente"
    help += "\n  --delete=[id] -> deleta uma tarefa com o id especificado"
    help += "\n  --list=[all, done, pending] -> lista todas as tarefas com o filtro especificado"
    help += "\n  --version -> obtem a versão do aplicativo"
    help += "\n  --help -> exibe esta mensagem de ajuda"

    console.log(help)
}

module.exports = help
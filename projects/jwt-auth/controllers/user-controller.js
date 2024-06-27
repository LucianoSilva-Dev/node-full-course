const UsersModel = require("../models/user-model")

const UserController = {
    create: async(name, password) => {
        const user = {
            name: name,
            password: password
        }

        try{
            const response = await UsersModel.create(user)
            return {id: response._id, name: response.name, pwd: response.password}
        }
        catch (error) {
            return `Erro Durante a criação do usuario: ${error}`
        }
    },

    login: async (name, password) => {
        try{
            const user = await UsersModel.find({name: name, password: password})
            if (user.length < 1) return {success: false, msg: "username ou senha incorretos"}
            return {id: user[0]._id, name: user[0].name}
        }
        catch (error) {
            return `Erro Durante a criação do usuario: ${error}`
        }
    }
}

module.exports = UserController
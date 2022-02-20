const { User_game } = require("../models")

class UserGameController {

    static renderHello(req, res) {
        res.send("Hola")
    }

    //membuat fungsi viewAll untuk membaca data dari postgres yang berasal dari folder module/module.export User_game
    static viewAll(req, res){
        User_game.findAll({
            order: [["id", 'ASC']]
        })
        .then((data) => {
            res.render("user-game", {data})
            console.log(data) //alhamdulillah datanya keluar
        })
        .catch((error) => {
            console.log(error)
        })
    }

    //untuk memanggil fungsi dari addUserGame
    static addUserGame(req, res){
        res.render("user-game/add")
    }

    //membuat fungsi add untuk di setorkan ke postgres
    static addUser(req, res){
    //ambil data dari body
    let newUser = {
        username: req.body.username,
        password: req.body.password,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    User_game.create(newUser)
        .then((_) => {
            res.redirect("/user-game/data")
        })
        .catch((err) => {
            console.log(err)
        })
    }
    //ambil data untuk dimasukan kedalam form berdasarkan id
    static getEditUser(req, res){
        const id = req.params.id
        User_game.findByPk(id)
            .then((data) => {
                res.render('user-game/edit', { data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    //fungsi untuk update
    static updateUser(req, res){
        const id = req.params.id
        let updateUser = {
            username: req.body.username,
            password: req.body.password
        }
        User_game.update(updateUser, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/user-game/data')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static deleteUserGame(req, res){
        const id = req.params.id
        User_game.destroy({
            where:{
                id:id
            }
        })
        .then(() => {
            res.redirect('/user-game/data')
        })
        .catch((err) => {
            console.log(err)
        })
    }



}

module.exports = UserGameController

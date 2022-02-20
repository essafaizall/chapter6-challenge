const { User_game_biodata } = require('../models')

class userBiodataController {
    static viewAll(req, res){
        User_game_biodata.findAll({
            order: [['id', 'ASC']]
        })
        .then((data) => {
            res.render("user-biodata", {data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getAddForm(req, res){
        res.render('user-biodata/add')
    }

    static postAddForm(req, res){
        let newBiodata = {
            full_name: req.body.full_name,
            email: req.body.email,
            gender: req.body.gender,
            birthday: req.body.birthday,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        User_game_biodata.create(newBiodata)
            .then((_) => {
                res.redirect("/user-biodata/data")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static getEditForm(req, res){
        const id = req.params.id
        User_game_biodata.findByPk(id)
            .then((data) => {
                res.render('user-biodata/edit', { data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static updateBiodata(req, res){
        const id = req.params.id
        let updateBiodata = {
            full_name: req.body.full_name,
            email: req.body.email,
            gender: req.body.gender,
            birthday: req.body.birthday,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        User_game_biodata.update(updateBiodata, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/user-biodata/data')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static deleteBiodata(req, res){
        const id = req.params.id
        User_game_biodata.destroy({
            where:{
                id:id
            }
        })
        .then(() => {
            res.redirect('/user-biodata/data')
        })
        .catch((err) => {
            console.log(err)
        })
    }

}
module.exports = userBiodataController
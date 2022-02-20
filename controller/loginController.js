const fs = require('fs')
class login{
    static postLogin(req, res){
        const { username, password } = req.body
        const foundUser = fs.readFileSync('data/data-statis.json', 'utf-8')
        console.log(foundUser)
        const parsedDatanya = JSON.parse(foundUser)
        const DataDitemukan = parsedDatanya.find((user) => user.username == username)

        if(!DataDitemukan){
            res.redirect('login')
        } else if(DataDitemukan.password == password){
            res.redirect('user-game/data')
        } else{
            res.redirect('login')
        }
    }

    static getLogin(req, res){
        res.render('login')
    }
}
module.exports = login
const { User_game_history } = require('../models')

class userHistoryController {
    static viewAll(req, res){
        User_game_history.findAll({
            order: [["id", 'ASC']]
        })
        .then((data) => {
            res.render("user-history", {data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

module.exports = userHistoryController
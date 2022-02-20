const userGameController = require('../controller/userGameController')
const userGameRouter = require('express').Router()

userGameRouter.get('/data', userGameController.viewAll)
userGameRouter.get('/add', userGameController.addUserGame)
userGameRouter.post('/add', userGameController.addUser)
userGameRouter.get('/edit/:id', userGameController.getEditUser)
userGameRouter.post('/update/:id', userGameController.updateUser)
userGameRouter.get('/delete/:id', userGameController.deleteUserGame)

module.exports = userGameRouter
const userHistory = require('../controller/userHistoryController')
const userHistoryRouter = require('express').Router()

userHistoryRouter.get('/data', userHistory.viewAll)

module.exports = userHistoryRouter
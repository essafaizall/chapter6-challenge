const loginController = require('../controller/loginController')
const loginAcountRouter = require('express').Router()
const express = require('express')


loginAcountRouter.post('/', loginController.postLogin)
loginAcountRouter.get('/', loginController.getLogin)

loginAcountRouter.use(express.json()) //parsing bentukan json
loginAcountRouter.use(express.urlencoded({ extended: true })) //parsing req.body dari postman form x-wwww-urlencoded


module.exports = loginAcountRouter
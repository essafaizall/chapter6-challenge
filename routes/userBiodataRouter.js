const userBiodataController = require('../controller/userBiodataController')
const userBiodataRouter = require('express').Router()

userBiodataRouter.get('/data', userBiodataController.viewAll)
userBiodataRouter.get('/add', userBiodataController.getAddForm)
userBiodataRouter.post('/add', userBiodataController.postAddForm)
userBiodataRouter.get('/edit/:id', userBiodataController.getEditForm)
userBiodataRouter.post('/update/:id', userBiodataController.updateBiodata)
userBiodataRouter.get('/delete/:id', userBiodataController.deleteBiodata)

module.exports = userBiodataRouter
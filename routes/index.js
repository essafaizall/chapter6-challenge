const userGameRouter = require('./userRouter')
const userBiodataRouter = require('./userBiodataRouter')
const loginRouter = require('./loginRouter')
const express = require('express')
const userHistoryRouter = require('./userHistory')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})

router.use('/user-biodata', userBiodataRouter)
router.use('/user-game', userGameRouter)
router.use('/login', loginRouter)
router.use('/user-history', userHistoryRouter)

module.exports = router
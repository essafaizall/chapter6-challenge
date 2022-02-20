const express = require('express')
const app = express()
const port = 3002
const router = require('./routes')


const exp = require('constants')
const req = require('express/lib/request')
const { json } = require('express/lib/response')
const res = require('express/lib/response')
const user_game = require('./models/user_game')

app.use(express.json()) //parsing bentukan json
app.use(express.urlencoded({ extended: true })) //parsing req.body dari postman form x-wwww-urlencoded

//setting view engine untuk ejs
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(__dirname + '/public'));

app.use(router)

// app.get('/login', (req, res) => {
//     res.render('login')
// })

app.get('/cekdanricek', async (req, res) => {
    const user = await User_game.findAll({
        include: [{
          model: User_game_biodata
        }]
      })
      res.send(user)
})

// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body
//     const foundUser = fs.readFileSync('data/data-statis.json', 'utf-8')
//     console.log(foundUser)
//     const parsedDatanya = JSON.parse(foundUser)
//     const DataDitemukan = parsedDatanya.find((user) => user.username == username)

//     if(!DataDitemukan){
//         res.redirect('/login')
//     } else if(DataDitemukan.password == password){
//         res.redirect('/dashboard')
//     } else{
//         res.redirect('/login')
//     }
// })

// app.post('/login', (req, res) => {

// })

app.listen(port, (req, res) => {
    console.log(`Sedang menjalankan di port ${port}`)
})
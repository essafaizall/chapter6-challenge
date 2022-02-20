# chapter6-challenge

Install all packages from node modules
`npm install`

dont forget to install our database in your local pc

`npm install -D sequelize-cli`

then, migrate to run folder migrations
`npx sequelize db:migrate`

if you want to bulk insert data, you can try this
`npx sequelize seed:create --name User_games`
`npx sequelize seed:create --name User_game_biodata`
`npx sequelize seed:create --name User_game_histories`

if it doesnt works, you can put data manually in pgAdmin :D

run `node server.js` 
login here `http://localhost:3002/`

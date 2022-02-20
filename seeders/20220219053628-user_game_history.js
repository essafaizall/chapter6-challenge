'use strict';
const fs = require('fs')

module.exports = {
  up(queryInterface, Sequelize) {
    return new Promise((resolve, reject) => {
      fs.readFile("./data/user-history.json", "utf-8", (error, data) => {
        if (error) reject(error)
        else {
          data = JSON.parse(data)
          resolve(data)
        }
      })
    }).then((data) => {
      data.forEach((datum) => {
        
        datum.createdAt = new Date()
        datum.updatedAt = new Date()
      })
      return queryInterface.bulkInsert("User_game_histories", data, {})
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("User_game_histories", null, {})
  }
};
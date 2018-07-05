'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Terminals",[{
      location : "north",
    },{
      location : "south",
    },{
      location : "east",
    },{
      location : "west",
    },{
      location : "center",
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Terminals", null)
  }
};

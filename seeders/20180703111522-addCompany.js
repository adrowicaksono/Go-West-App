'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Vendors", [{
      name : "Wim Cycle"
    },{
      name : "Polygon"
    },{
      name : "Specialize"
    },{
      name : "Police"
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Vendors",null )
  }
};

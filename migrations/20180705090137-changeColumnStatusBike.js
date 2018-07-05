'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Bikes", "status", {type:'BOOLEAN USING CAST("status" as BOOLEAN)', defaultValue:true}, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeColumn("Bikes", "status", {})
  }
};

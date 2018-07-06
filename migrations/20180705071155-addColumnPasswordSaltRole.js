'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [queryInterface.addColumn("Customers", "password", {type:Sequelize.STRING}, {}),
            queryInterface.addColumn("Customers", "salt", {type:Sequelize.STRING}, {}),
            queryInterface.addColumn("Customers", "role", {type:Sequelize.STRING}, {})]
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn("Customers", "password"),
            queryInterface.removeColumn("Customers", "salt"),
            queryInterface.removeColumn("Customers", "role")]
  }
};

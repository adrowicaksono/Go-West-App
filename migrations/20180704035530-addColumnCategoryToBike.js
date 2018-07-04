'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Bikes", "category",{type:Sequelize.STRING, defaultValue:"general"}, {} )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Bikes", "category")
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      BikeId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : new Date,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : new Date,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};
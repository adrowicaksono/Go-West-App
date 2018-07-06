'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Bikes", [{
      category : "sport",
      TerminalId : "1",
      VendorId : "1",
    },{
      category : "sport",
      TerminalId : "1",
      VendorId : "2",
    },{
      category : "sport",
      TerminalId : "1",
      VendorId : "3",
    },{
      category : "sport",
      TerminalId : "1",
      VendorId : "4",
    },{
      category : "sport",
      TerminalId : "2",
      VendorId : "1",
    },{
      category : "sport",
      TerminalId : "2",
      VendorId : "2",
    },{
      category : "sport",
      TerminalId : "2",
      VendorId : "3",
    },{
      category : "sport",
      TerminalId : "2",
      VendorId : "4",
    },{
      category : "sport",
      TerminalId : "3",
      VendorId : "1",
    },{
      category : "sport",
      TerminalId : "3",
      VendorId : "2",
    },{
      category : "sport",
      TerminalId : "3",
      VendorId : "3",
    },{
      category : "sport",
      TerminalId : "3",
      VendorId : "4",
    },{
      category : "sport",
      TerminalId : "4",
      VendorId : "1",
    },{
      category : "sport",
      TerminalId : "4",
      VendorId : "2",
    },{
      category : "sport",
      TerminalId : "4",
      VendorId : "3",
    },{
      category : "sport",
      TerminalId : "4",
      VendorId : "4",
    },{
      category : "sport",
      TerminalId : "5",
      VendorId : "1",
    },{
      category : "sport",
      TerminalId : "5",
      VendorId : "2",
    },{
      category : "sport",
      TerminalId : "5",
      VendorId : "3",
    },{
      category : "fixie",
      TerminalId : "1",
      VendorId : "1",
    },{
      category : "fixie",
      TerminalId : "1",
      VendorId : "2",
    },{
      category : "fixie",
      TerminalId : "1",
      VendorId : "3",
    },{
      category : "fixie",
      TerminalId : "1",
      VendorId : "4",
    },{
      category : "fixie",
      TerminalId : "2",
      VendorId : "1",
    },{
      category : "fixie",
      TerminalId : "2",
      VendorId : "2",
    },{
      category : "fixie",
      TerminalId : "2",
      VendorId : "3",
    },{
      category : "fixie",
      TerminalId : "2",
      VendorId : "4",
    },{
      category : "fixie",
      TerminalId : "3",
      VendorId : "1",
    },{
      category : "fixie",
      TerminalId : "3",
      VendorId : "2",
    },{
      category : "fixie",
      TerminalId : "3",
      VendorId : "3",
    },{
      category : "fixie",
      TerminalId : "3",
      VendorId : "4",
    },{
      category : "fixie",
      TerminalId : "4",
      VendorId : "1",
    },{
      category : "fixie",
      TerminalId : "4",
      VendorId : "2",
    },{
      category : "fixie",
      TerminalId : "4",
      VendorId : "3",
    },{
      category : "fixie",
      TerminalId : "4",
      VendorId : "4",
    },{
      category : "fixie",
      TerminalId : "5",
      VendorId : "1",
    },{
      category : "fixie",
      TerminalId : "5",
      VendorId : "2",
    },{
      category : "fixie",
      TerminalId : "5",
      VendorId : "3",
    },{
      category : "fixie",
      TerminalId : "3",
      VendorId : "4",
    },], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bikes", null)
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers",[{
      name : "David",
      gender :"male",
      email : "yavid@mail.com",
    },{
      name : "Yunus",
      gender :"male",
      email : "yunus@mail.com",
    },{
      name : "Amsal",
      gender :"male",
      email : "amsal@mail.com",
    },{
      name : "Wicaksono",
      gender :"male",
      email : "wicaksono@mail.com",
    },{
      name : "Ine",
      gender :"female",
      email : "ine@mail.com",
    },{
      name : "Shizuka",
      gender :"male",
      email : "shizuka@mail.com",
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null)
  }
};

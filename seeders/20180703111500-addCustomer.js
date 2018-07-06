'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers",[{
      name : "David",
      gender :"male",
      email : "yavid@mail.com",
      password : '$2b$08$nH6yYErcdoYSoaOhKC/j6uRrv78Js9JbfzTzJN6IiwmWRI/zyER/C',
      salt : '$2b$08$nH6yYErcdoYSoaOhKC/j6u',
    },{
      name : "Yunus",
      gender :"male",
      email : "yunus@mail.com",
      password : '$2b$08$nH6yYErcdoYSoaOhKC/j6uRrv78Js9JbfzTzJN6IiwmWRI/zyER/C',
      salt : '$2b$08$nH6yYErcdoYSoaOhKC/j6u',
    },{
      name : "Amsal",
      gender :"male",
      email : "amsal@mail.com",
      password : '$2b$08$nH6yYErcdoYSoaOhKC/j6uRrv78Js9JbfzTzJN6IiwmWRI/zyER/C',
      salt : '$2b$08$nH6yYErcdoYSoaOhKC/j6u',
    },{
      name : "Wicaksono",
      gender :"male",
      email : "wicaksono@mail.com",
      password : '$2b$08$nH6yYErcdoYSoaOhKC/j6uRrv78Js9JbfzTzJN6IiwmWRI/zyER/C',
      salt : '$2b$08$nH6yYErcdoYSoaOhKC/j6u',
    },{
      name : "Ine",
      gender :"female",
      email : "ine@mail.com",
      password : '$2b$08$nH6yYErcdoYSoaOhKC/j6uRrv78Js9JbfzTzJN6IiwmWRI/zyER/C',
      salt : '$2b$08$nH6yYErcdoYSoaOhKC/j6u',
    },{
      name : "Shizuka",
      gender :"female",
      email : "shizuka@mail.com",
      password : '$2b$08$nH6yYErcdoYSoaOhKC/j6uRrv78Js9JbfzTzJN6IiwmWRI/zyER/C',
      salt : '$2b$08$nH6yYErcdoYSoaOhKC/j6u',
    },
    {
      name : "admin",
      gender :"female",
      email : "admin@admin.com",
      password : '$2b$08$nH6yYErcdoYSoaOhKC/j6uRrv78Js9JbfzTzJN6IiwmWRI/zyER/C',
      salt : '$2b$08$nH6yYErcdoYSoaOhKC/j6u',
      role : 'admin',
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null)
  }
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    age: DataTypes.INTEGER,
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    birthdate: {
      type: DataTypes.DATE
    }
    ,
    BikeId: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };

  Customer.beforeCreate((customer, options) => {
    let born = new Date(customer.birthdate)
    var ageDifMs = Date.now() - born.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(ageDate.getUTCFullYear() - 1970)
    customer.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  });
  return Customer;
};
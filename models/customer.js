'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name:{ 
      type: DataTypes.STRING,
      validate: {
        allowNull: false
      }
    },
    age: DataTypes.INTEGER,
    gender: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false
      }
    },
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      validate: {
        allowNull: false,
        isEmail: true
      }
    },
    birthdate: {
      type: DataTypes.DATE,
      validate: {
        allowNull: false
      }
    }
    ,
    BikeId: DataTypes.INTEGER,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.STRING, 
  }, {
    hooks: {
      beforeCreate: function(customer,option){
        const bcrypt = require('bcrypt')
        const generateSalt = bcrypt.genSaltSync(8)
        const hash = bcrypt.hashSync(customer.password,generateSalt)
        customer.salt = generateSalt
        customer.password = hash
      }
    }
  });
  Customer.associate = function(models) {
    Customer.belongsTo(models.Bike)
  };
  Customer.afterBulkUpdate((customer,option)=>{
    let bikeId = customer.attributes.BikeId
    if(bikeId){
        let Bike = sequelize.models.Bike
        Bike
        .findById(bikeId)
        .then(function(bike){
          console.log(bike.status)
          if(bike.status == true){
            bike.status = false
            bike
            .save()
            .catch(function(err){
              console.log(err)
            })
          }
        })
        .catch(function(err){
          console.log(err)
        })
      }
      console.log("===================>",customer.attributes.BikeId)  
    
  });

  Customer.beforeCreate((customer, options) => {
    let born = new Date(customer.birthdate)
    var ageDifMs = Date.now() - born.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(ageDate.getUTCFullYear() - 1970)
    customer.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  });

  
  return Customer;
};
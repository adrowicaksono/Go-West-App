'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bike = sequelize.define('Bike', {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    tag: {
      type: DataTypes.STRING
    },
    VendorId: DataTypes.INTEGER,
    TerminalId: DataTypes.INTEGER,
    category :{
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    }
  }, {});
  Bike.associate = function(models) {
    Bike.belongsTo(models.Terminal)
    Bike.belongsTo(models.Vendor)
    Bike.hasMany(models.Customer)
  };
  


  return Bike;
};
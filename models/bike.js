'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bike = sequelize.define('Bike', {
      status: DataTypes.STRING,
      tag: DataTypes.STRING,
      category : DataTypes.STRING,
      vendorId: DataTypes.INTEGER,
      terminalId: DataTypes.INTEGER,
  }, {});
  Bike.associate = function(models) {
    // associations can be defined here
  };
  return Bike;
};
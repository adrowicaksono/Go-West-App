'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bike = sequelize.define('Bike', {
    status: {
      type: DataTypes.STRING,
      defaultValue: 'free'
    },
    tag: {
      type: DataTypes.STRING
    },
    vendorId: DataTypes.INTEGER,
    terminalId: DataTypes.INTEGER
  }, {});
  Bike.associate = function(models) {
    // associations can be defined here
  };
  return Bike;
};
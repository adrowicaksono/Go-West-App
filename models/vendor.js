'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vendor = sequelize.define('Vendor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Vendor.associate = function(models) {
    
    Vendor.hasMany(models.Bike)
  };
  return Vendor;
};
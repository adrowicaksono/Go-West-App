'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vendor = sequelize.define('Vendor', {
    name: DataTypes.STRING
  }, {});
  Vendor.associate = function(models) {
    // associations can be defined here
  };
  return Vendor;
};
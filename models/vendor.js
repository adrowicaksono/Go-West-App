'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vendor = sequelize.define('Vendor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Vendor.associate = function(models) {
    // associations can be defined here
  };
  return Vendor;
};
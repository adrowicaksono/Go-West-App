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
    category : DataTypes.STRING,
  }, {});
  Bike.associate = function(models) {
    Bike.belongsTo(models.Terminal)
    Bike.belongsTo(models.Vendor)
  };
  




  return Bike;
};
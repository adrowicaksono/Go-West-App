'use strict';
module.exports = (sequelize, DataTypes) => {
  var Terminal = sequelize.define('Terminal', {
    location: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false
      }
    }
  }, {});
  Terminal.associate = function(models) {
    // associations can be defined here
    Terminal.hasMany(models.Bike)
  };
  return Terminal;
};
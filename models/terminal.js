'use strict';
module.exports = (sequelize, DataTypes) => {
  var Terminal = sequelize.define('Terminal', {
    location: DataTypes.STRING
  }, {});
  Terminal.associate = function(models) {
    // associations can be defined here
  };
  return Terminal;
};
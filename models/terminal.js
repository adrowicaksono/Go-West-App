'use strict';
module.exports = (sequelize, DataTypes) => {
  var Terminal = sequelize.define('Terminal', {
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Terminal.associate = function(models) {
    // associations can be defined here
  };
  return Terminal;
};
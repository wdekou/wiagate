'use strict';
module.exports = (sequelize, DataTypes) => {
  var Wisp = sequelize.define('Wisp', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    welcomeMessage: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Wisp;
};
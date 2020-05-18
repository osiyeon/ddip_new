'use strict';
const Delivery="Delivery"
const Direct = "Direct Receipt"
module.exports = (sequelize, DataTypes) => {
  const market = sequelize.define('market', {
    market_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    tel_market: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    deli_market: {
      type: DataTypes.ENUM([Delivery, Direct]),
      allowNull: false,
    }
  });
  // market.associate = function(models) {
  //   market.hasMany(models.product);
  // };
  return market;
};
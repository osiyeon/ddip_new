'use strict';
const Woman = "Woman";
const Man = "Man";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_name: {
      type: DataTypes.STRING(27),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM([Woman, Man]),
      allowNull: false
    },
    tel_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat_user: {
      type: DataTypes.NUMERIC(15,2),
      allowNull: false
    },
    long_user: {
      type: DataTypes.NUMERIC(15,2),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tel_certify: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    account: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  // user.associate = function(models) {
  //   // associations can be defined here
  // };
  return user;
};

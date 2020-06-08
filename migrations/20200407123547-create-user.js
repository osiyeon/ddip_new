'use strict';
const Woman = "Woman";
const Man = "Man";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM([Woman, Man]),
        allowNull: false
      },
      tel_user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lat_user: {
        type: Sequelize.NUMERIC(15,2),
        allowNull: false
      },
      long_user: {
        type: Sequelize.NUMERIC(15,2),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tel_certify: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      account: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
const { sequelize } = require("../index");
const { DataTypes } = require("sequelize")

const EnergyUsage = sequelize.define("energy-usage", {
  energy_meter: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = { EnergyUsage }


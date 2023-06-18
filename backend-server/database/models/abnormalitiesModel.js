const { sequelize } = require("../index");
const { DataTypes } = require("sequelize")

const Abnormalities = sequelize.define("abnormalities_alerts", {
  deviceName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "device_name"
  },
  info: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  }
});

module.exports = { Abnormalities }
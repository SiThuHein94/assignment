const { sequelize } = require("../index");
const { DataTypes } = require("sequelize")

const ElectricityUsage = sequelize.define("electricity_usages", {
    totalConsumption: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: "total_consumption"
    },
    unit: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
});

module.exports = { ElectricityUsage }
const { sequelize } = require("../index");
const { DataTypes } = require("sequelize")

const WaterUsage = sequelize.define("water_usages", {
    currentWaterLevel: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: "current_water_level"
    },
    unit: {
        type: DataTypes.STRING,
    }
});

module.exports = { WaterUsage }
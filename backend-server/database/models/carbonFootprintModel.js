const { sequelize } = require("../index");
const { DataTypes } = require("sequelize")

const CarbonFootprint = sequelize.define("carbon_footprints", {
    footprintValue: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: "footprint_value"
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        field: "createdAt"
    }
});

module.exports = { CarbonFootprint }
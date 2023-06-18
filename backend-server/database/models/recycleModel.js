const { sequelize } = require("../index");
const { DataTypes } = require("sequelize")

const Recycle = sequelize.define("recycle", {
    recycle: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "recycle"
    },
    nonRecycle: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "non_recycle"
    },
});

module.exports = { Recycle }
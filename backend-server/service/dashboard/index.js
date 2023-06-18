const { Abnormalities } = require("../../database/models/abnormalitiesModel")
const { CarbonFootprint } = require("../../database/models/carbonFootprintModel")
const { ElectricityUsage } = require("../../database/models/electricityModel")
const { EnergyUsage } = require("../../database/models/energyUsageModel")
const { WaterUsage } = require("../../database/models/waterUsageModel")
const { Recycle } = require("../../database/models/recycleModel")
const { sequelize } = require("../../database");

const getAllAbnormalities = async () => {
    const allAbnormalitiesData = await Abnormalities.findAll()
    return allAbnormalitiesData
}

const getCurrentWaterLevel = async () => {
    const dateCurrent=new Date()
    const currentWaterLevel = await WaterUsage.findOne({
        where: sequelize.where(sequelize.fn('date', sequelize.col('createdAt')), '=', dateCurrent)
      });
      if(currentWaterLevel===null){
        return await WaterUsage.create({ 
            currentWaterLevel: 0, unit: "m",
          });
      }
    return currentWaterLevel
}

const getElectricityConsumption = async () => {
    const electricityConsumption = await ElectricityUsage.findAll()
    return electricityConsumption
}

const getCarbonFootprint = async () => {
    const dateCurrent="2023-06-17"
    const carbonFootprint = await CarbonFootprint.findOne({
        where: sequelize.where(sequelize.fn('date', sequelize.col('createdAt')), '=', dateCurrent)
      });
    return carbonFootprint
}

const getTwentyfourHourConsumption = async () => {
    const twentyfourHourConsumption = await EnergyUsage.findAll()
    return twentyfourHourConsumption
}
const getTwentyfourHourWaterLevel =async()=>{
    const dateCurrent="2023-06-17"
    const twentyfourHourConsumption = await WaterUsage.findAll({
        where: sequelize.where(sequelize.fn('date', sequelize.col('createdAt')), '=', dateCurrent)
    })
    return twentyfourHourConsumption
}

const getRecycleData =async()=>{
    const recycleData = await Recycle.findAll()
    return recycleData
}

module.exports = {
    getAllAbnormalities,
    getCurrentWaterLevel,
    getElectricityConsumption,
    getCarbonFootprint,
    getTwentyfourHourConsumption,
    getTwentyfourHourWaterLevel,
    getRecycleData
}
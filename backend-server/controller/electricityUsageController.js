const { getElectricityConsumption } = require("../service/dashboard")

const electricityUsageController = async (req, res) => {
    const result = await getElectricityConsumption()
    res.send(result)
}

module.exports = {
    electricityUsageController
}
const { getTwentyfourHourConsumption } = require("../service/dashboard")

const energyUsageController = async (req, res) => {
    const result = await getTwentyfourHourConsumption()
    res.send(result)
}

module.exports = {
    energyUsageController
}
const { getCurrentWaterLevel } = require("../service/dashboard")

const waterUsageController = async (req, res) => {
    const result = await getCurrentWaterLevel()
    res.send(result)
}

module.exports = {
    waterUsageController
}
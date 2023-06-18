const { getTwentyfourHourWaterLevel } = require("../service/dashboard")

const waterLevelController = async (req, res) => {
    const result = await getTwentyfourHourWaterLevel()
    res.send(result)
}

module.exports = {
    waterLevelController
}
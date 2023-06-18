const { getAllAbnormalities } = require("../service/dashboard");

const abnormalitiesController = async (req, res) => {
    const result = await getAllAbnormalities()
    res.send(result)
}

module.exports= {
    abnormalitiesController
}
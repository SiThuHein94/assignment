const { getCarbonFootprint } = require("../service/dashboard")

const carbonFootprintController = async (req, res) => {
    const result = await getCarbonFootprint()
    res.send(result)
}

module.exports = {
    carbonFootprintController
}
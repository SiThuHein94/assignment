const { getRecycleData } = require("../service/dashboard")

const recycleController = async (req, res) => {
    const result = await getRecycleData()
    res.send(result)
}

module.exports = {
    recycleController
}
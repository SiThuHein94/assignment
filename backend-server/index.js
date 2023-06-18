const express = require("express");
const cors= require("cors")
const appRouter = require("./routes");
const { sequelize } = require("./database");
const { Abnormalities } = require("./database/models/abnormalitiesModel");
const fs = require("fs");
require('dotenv').config()

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors())

app.use("/api/", appRouter)

sequelize.sync().then(() => {
  var sql_string_water = fs.readFileSync('./dummyData/jarvis_raw.sql', 'utf8');
  sequelize.query(sql_string_water);
})

Abnormalities.find

   

app.listen(port, () => {
  console.log(`Example app listening on port ${port||3000}!`);
});
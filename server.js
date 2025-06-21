require("dotenv").config();
const config = require("config");
const port = config.get("port");
const sequelize = require("./config/db");
const app = require("./app");









console.log("in server.js");
// listening to port
app.listen(port, () => console.log(`Listening on Port: ${port}, in server.js`));
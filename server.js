require("dotenv").config();

const initializeDatabase = require("./config/db/db-init");
const PORT = require("config").get("PORT");
const app = require("./app");




// Connect database and listen to PORT
(async () => {
  try {
    await initializeDatabase();

    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));    
  } catch (error) {
    console.error("An error occured in server and startup failed: ", error);
  }
})();






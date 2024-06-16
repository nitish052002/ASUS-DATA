const app = require("./app");
const connectDB = require("./db");
require("dotenv").config({
  path: "./.env",
});
const PORT = process.env.PORT || 8001;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR : ", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log();
  });

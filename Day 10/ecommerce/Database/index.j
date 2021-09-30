const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_database", "knshi", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

//self calling function
//waiting for response
(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established with DB");
  } catch (err) {
    console.error("Unable to connect to DB");
  }
})();

module.exports = sequelize;

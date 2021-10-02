const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "1234456789", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected!");
  } catch (err) {
    console.error("Cannot Connect to DB");
  }
})();

module.exports = sequelize;
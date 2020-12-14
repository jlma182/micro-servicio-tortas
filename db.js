const Sequelize = require("sequelize");

const cakesModel = require("./models/tortas");

const sequelize = new Sequelize("tortascasa", "postgres", "1qwerty.", {
   host: "127.0.0.1",
   dialect: "postgres",
});

const Cake = cakesModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
   console.log("model send");
});

module.exports = {
   Cake,
};

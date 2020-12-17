const Sequelize = require("sequelize");

const cakesModel = require("./models/cakes");

const sequelize = new Sequelize("cakes182", "postgres", "1qwerty.", {
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

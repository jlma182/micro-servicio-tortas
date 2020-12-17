module.exports = (sequelize, DataTypes) => {
   const cakes = sequelize.define("cake", {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      name: DataTypes.STRING,
      cakeFlavor: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sizeServes: DataTypes.INTEGER,
      URL: DataTypes.STRING,
   });
   return cakes;
};

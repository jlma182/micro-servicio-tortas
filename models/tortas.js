module.exports = (sequelize, DataTypes) => {
  const cakes = sequelize.define('torta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    sabor: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    porciones: DataTypes.INTEGER,
  });
  return cakes;
};
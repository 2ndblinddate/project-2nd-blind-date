const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "question",
  }
);

module.exports = Question;

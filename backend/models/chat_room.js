"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Chat_Room extends Model {
    static associate(models) {
      this.hasMany(models.Chat, { foreignKey: "chat_room_id" });
      this.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Chat_Room.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {},
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // required
        validate: {
          notNull: { msg: "User id is required." }, // required
          notEmpty: { msg: "User id cannot be empty." }, // required
        },
      },
    },
    {
      sequelize,
      modelName: "Chat_Room",
    }
  );
  return Chat_Room;
};

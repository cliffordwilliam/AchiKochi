const { Chat_Room } = require("../models");

module.exports = class ChatRoomController {
    static async get(req, res, next) {
        try {
            // get all
            const allChatRoom = await Chat_Room.findAll();
            res.status(200).json({
                status: 200,
                msg: `Chat rooms successfully retrieved.`,
                chatRooms: allChatRoom,
            });
        } catch (error) {
            next(error);
        }
    }
    static async post(req, res, next) {
        try {
            const { name } = req.body;
            //check name
            const checkname = await Chat_Room.findOne({ where: { name } });
            if (checkname)
                throw {
                    name: "CustomError",
                    msg: "NameAlreadyExist",
                    status: 400,
                };
            const obj = await Chat_Room.create({
                name,
                user_id: 1,
            });
            res.status(201).json({
                status: 201,
                msg: `Chat room successfully created.`,
                chatRoom: obj,
            });
        } catch (error) {
            next(error);
        }
    }
    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            const obj = await Chat_Room.destroy({ where: { id } });
            res.status(200).json({
                status: 200,
                msg: `Chat room successfully deleted.`,
                chatRoom: obj,
            });
        } catch (error) {
            next(error);
        }
    }
};

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
            const res = await Chat_Room.create({
                name,
                user_id: req.loggedInUser.id,
            });
            res.status(201).json({
                status: 201,
                msg: `Chat room successfully created.`,
                chatRoom: res,
            });
        } catch (error) {
            next(error);
        }
    }
    static async delete(req, res, next) {
        try {
            const res = await Chat_Room.destroy({
                user_id: req.loggedInUser.id,
            });
            res.status(200).json({
                status: 200,
                msg: `Chat room successfully deleted.`,
                chatRoom: res,
            });
        } catch (error) {
            next(error);
        }
    }
};

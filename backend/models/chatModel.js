const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupeChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "Message",
    },
    groupeAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
const chat = mongoose.model("ChatModel");

module.exports = chatModel;

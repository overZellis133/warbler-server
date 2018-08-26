const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createMessage,
  getMessage,
  deleteMessage,
  updateMessage,
  getMessages
} = require("../handlers/messages");

// prefix - /api/users/:id/messages
router.route("/")
  .get(getMessages)
  .post(createMessage);

// prefix - /api/users/:id/messages/
router.route("/:message_id")
  .get(getMessage)
  .put(updateMessage)
  .delete(deleteMessage);

module.exports = router;

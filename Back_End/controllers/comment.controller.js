const Comment = require("../models/comment.model");
const constants = require("../utils/constants");
const objectConvertor = require("../utils/objectConcverter");

exports.createComment = async (req, res) => {
  const commentObject = {
    content: req.body.content,
    ticketId: req.params.ticketId,
    commenterId: req.userId,
  };

  try {
    const comment = await Comment.create(commentObject);

    res.status(201).send(comment);
  } catch (err) {
    console.log("Some error happened while creating comment", err.message);
    res.status(500).send({
      message: "Some internal server error",
    });
  }
};

exports.fetchComments = async (req, res) => {
  try {
    const comment = await Comment.find({ ticketId: req.params.ticketId });
    res.status(200).send(comment);
  } catch (err) {
    console.log("Some error happened while fetching comment", err.message);
    res.status(500).send({
      message: "Some internal server error",
    });
  }
};

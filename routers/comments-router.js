const express = require("express");
const router = express.Router();
const Comments = require("../data/db.js");

// Start endpoints

// Get requests
router.get("/:id/comments", async (req, res) => {
  try {
    const comments = await Comments.findPostComments(req.params.id);

    if (!!comments.length) {
      res.status(200).json(comments);
    } else {
      res.status(404).json({ message: "No comments on this post" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error retrieving this post" });
  }
});

// Post requests
router.post("/:id/comments", async (req, res) => {
  const commentContent = { ...req.body, post_id: req.params.id };

  try {
    const comment = await Comments.insertComment(commentContent);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// End endpoints

module.exports = router;

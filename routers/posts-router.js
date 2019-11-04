const express = require("express");
const router = express.Router();
const Posts = require("../data/db.js");

// Start endpoints

// Get requests
router.get("/", (req, res) => {
  Posts.find(req.query)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      console.log(error);
      res.status(500).json({ message: "Can't get posts!", error: err });
    });
});
router.get("/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch(err => {
      console.log(error);
      res.status(500).json({ message: "Can't get post", error: err });
    });
});

// Post requests

// End endpoints

module.exports = router;

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
router.post("/", (req, res) => {
  Posts.insert(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Delete Requests
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Posts.remove(id);
    if (!!deleted) {
      res.status(200).json({ success: true, boolean: deleted });
    } else {
      res.status(404).json({
        success: false,
        message: "ID does not match existing Post"
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Put Requests
router.put("/:id", async (req, res) => {
  const updates = req.body;
  try {
    const updatedPost = await Posts.update(req.params.id, updates);
    if (!!updatedPost) {
      res
        .status(202)
        .json({ success: true, message: "Post was updated successfully" });
    } else {
      res.status(404).json({ success: false, message: "Body or ID not valid" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// End endpoints

module.exports = router;

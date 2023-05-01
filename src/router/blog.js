const { blogController } = require("../controller");
const express = require("express");
const router = express.Router();

router.post("/createBlog", blogController.addBlog);

router.get("/:id", blogController.getBlogById);

router.get("/", blogController.getBlog);

router.delete("/:id", blogController.deleteBlog);

router.put("/:id", blogController.editBlog);

module.exports = router;

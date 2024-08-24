const { commentController } = require("../controller");
const express = require("express");
const router = express.Router();

router.post("/create/:id", commentController.addcomment);

router.get("/:id", commentController.getcommentById);

router.get("/getByPost/:id", commentController.getcommentByPost);

router.delete("/:id", commentController.deletecomment);

router.put("/:id", commentController.editcomment);

module.exports = router;

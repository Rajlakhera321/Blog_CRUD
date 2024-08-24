const { postController } = require("../controller");
const express = require("express");
const { verifyToken } = require("../middleware/jwt");
const { isAdmin } = require("../middleware/authorization");
const router = express.Router();

router.post("/createpost", verifyToken,postController.addpost);

router.get("/:id", verifyToken, postController.getpostById);

router.get("/", verifyToken, postController.getpost);

router.delete("/:id", verifyToken, postController.deletepost);

router.put("/:id", verifyToken, postController.editpost);

module.exports = router;

const express = require("express")
const { getPost, getPostById, savePost, updatePost, deletePost } = require("../controller/postController")
const router = express.Router()


router.route("/").get(getPost).post(savePost)
router.route("/:id").get(getPostById).put(updatePost).delete(deletePost)


module.exports = router;
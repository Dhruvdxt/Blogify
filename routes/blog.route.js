const router = require('express').Router();
const upload = require('../middlewares/upload');
const {handleGetAllBlogs, handleGetAllBlogsByUserId, handleCreateNewBlog, handleUpdateBlogById, handleDeleteBlogById,} = require('../controllers/blog.controller');

router
.route('/')
.post(upload.single("coverImage"), handleCreateNewBlog)
.patch(handleUpdateBlogById)
.delete(handleDeleteBlogById);

router
.route('/getBlogsOfUser')
.post(handleGetAllBlogsByUserId);

router
.route('/getBlogsOfOthers')
.post(handleGetAllBlogs)

module.exports = router;
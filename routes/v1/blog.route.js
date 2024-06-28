const router = require('express').Router();
const upload = require('../middlewares/upload');
const commentRoutes = require('./comment.route');
const {handleGetAllBlogs, handleGetAllBlogsByUserId, handleCreateBlog, handleUpdateBlogById, handleDeleteBlogById,} = require('../controllers/blog.controller');

router
.route('/')
.post(upload.single("coverImage"), handleCreateBlog)
.put(handleUpdateBlogById)
.delete(handleDeleteBlogById);

router
.route('/comment', commentRoutes);

router
.route('/:blogId')
.get(handleGetBlogById)
.put(handleUpdateBlogById)
.delete(handlDeleteBlogById);

router
.route('/getBlogsOfUser')
.post(handleGetAllBlogsByUserId);

router
.route('/getBlogsOfOthers')
.post(handleGetAllBlogs)

module.exports = router;
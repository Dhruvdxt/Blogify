const router = require('express').Router();
const userRoutes = require('./user.route');
const blogRoutes = require('./blog.route');
const likeRoutes = require('./like.route');
const commentRoutes = require('./comment.route');


router.use('/user', userRoutes);

router.use('/blog', blogRoutes);



module.exports = router;



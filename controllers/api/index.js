const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.user('/posts', postRoutes);
router.user('/comments', commentRoutes);

module.exports = router;

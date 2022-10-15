const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  console.log(req.session);

  Post.findAll({
    attributes: [
      'id',
      'title',
      'created_at',
      'post_content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', "user_comment", "user_id", "post_id", "created_at"],
        include: {
          model: User, 
          attributes: ['username', 'github', 'twitter']
        }, 
      }
    ]
  }) .then(dbPostData => {
    const posts = dbPostData.map(post => post.get ({ plain: true}));
    res.render('homepage', { posts, 
      loggedIn: req.session.loggedIn
    });
  })
})

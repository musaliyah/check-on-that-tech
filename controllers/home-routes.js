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
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('./login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_content'
    ]
  })
})

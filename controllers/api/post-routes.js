const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const sequalize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'created_at', 'user_id', 'post_id'],
                include: {
                    model: User, 
                    attributes: ['username', 'github', 'twitter']
                }
            },
            {
                model: User, 
                attributes: ['username', 'github', 'twitter']
            },
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username', 'github', 'twitter']
            },
            {
                model: Comment,
                attributes: ['id', 'post_id', 'user_id', 'comment', 'created_at'],
                include: {
                    model: User, 
                    attributes: ['username', 'github', 'twitter']
                }
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post in our system matches this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
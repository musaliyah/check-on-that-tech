const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const sequalize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/')
const { User } = require('../models');

const userData = [ 
  {
    username: 'jesse_pinkman',
    twitter: 'pinkyjess',
    github: 'pinkyjess',
    email: 'jessepinkman@yahoo.com',
    password: 'itsjessssssse'
  },
  {
    username: 'walterWhite',
    twitter: 'walter_white',
    github: 'walter_white',
    email: 'walterwhite@yahoo.com',
    password: 'breakingbad'
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 
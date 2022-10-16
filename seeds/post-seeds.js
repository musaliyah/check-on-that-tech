const { Post } = require('../models');

const postData = [
  {
    title: "Dezign",
    post_content: "A pattern making application that allows users to pick templates to modify for their stitching dreams!",
    user_id: 1
  },
  {
    title: "Survived and Punished",
    post_content: "A networking application for national survivor-centered participatory defense campaigns. Coordinate action with other campaigns to end cyclical violence.",
    user_id: 2
  },
  {
    title: "Outfit of The Day",
    post_content: "This application allows users to upload photos of their daily outfits with their private or public friend groups. At the end of the year the application saves all the photos into a condensed video that users can purchase.",
    user_id: 3
  }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts; 
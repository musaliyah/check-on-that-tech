const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequalize, 
    freeTableName: true,
    underscored: true, 
    modelName: 'post'
})
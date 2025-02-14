import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import UserProfile from './userProfile.js'; 

const Feed = sequelize.define("Feed", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: UserProfile,
            key: "id"
        }
    }
}, {
    hooks: {
        beforeValidate: (feed) => {
            const allowedFields = ["title", "content", "userId"];
            Object.keys(feed.dataValues).forEach((key) => {
                if (!allowedFields.includes(key)) {
                    throw new Error(`Invalid field: ${key}`);
                }
            });
        }
    }
});

UserProfile.hasMany(Feed, { foreignKey: 'userId', as: 'posts' });
Feed.belongsTo(UserProfile, { foreignKey: 'userId', as: 'user' });

export default Feed;

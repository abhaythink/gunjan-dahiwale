import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import UserProfile from './userProfile.js';
import Feed from './feed.js';

const Like = sequelize.define("Like", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserProfile,
            key: "id"
        }
    },
    feedId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Feed,
            key: "id"
        }
    }
});

UserProfile.belongsToMany(Feed, { through: Like, foreignKey: 'userId', as: 'likedPosts' });
Feed.belongsToMany(UserProfile, { through: Like, foreignKey: 'feedId', as: 'likedByUsers' });

export default Like;

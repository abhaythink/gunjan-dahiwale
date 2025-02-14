import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import UserProfile from './userProfile.js';

const ProfilePicture = sequelize.define("ProfilePicture", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,  
        references: {
            model: UserProfile,
            key: "id"
        }
    }
});

UserProfile.hasOne(ProfilePicture, {foreignKey: "userId", as: "profilePicture"});
ProfilePicture.belongsTo(UserProfile, {foreignKey: "userId", as: "user"})

export default ProfilePicture;

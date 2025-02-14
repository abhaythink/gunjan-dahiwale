import {DataTypes} from 'sequelize';
import { sequelize } from '../utils/db.js';
import Feed from './feed.js';

const UserProfile = sequelize.define("UserProfile", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
    },
    feeds: {
        type: DataTypes.JSON,  
        defaultValue: []
    }
})  

export default UserProfile;
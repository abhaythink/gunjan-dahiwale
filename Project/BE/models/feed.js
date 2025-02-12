import {DataTypes} from 'sequelize';
import { sequelize } from '../utils/db.js';

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
    }
})

export default Feed;
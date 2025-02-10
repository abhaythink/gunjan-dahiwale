import {Sequelize, DataTypes} from 'sequelize';
import {sequelize} from '../utils/database.js'
import User from '../models/user.js';

 const Order = sequelize.define('Order', {
    id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
    }
});

User.hasMany(Order, {foreignKey: "userId"});
Order.belongsTo(User, {foreignKey: "OrderId"});

export default Order;
const {sequelize} = require('../utils/db.js')
const DataTypes = require('sequelize');

const Whitelist = sequelize.define('Whitelist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = {Whitelist}    
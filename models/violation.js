const { Hooks } = require('sequelize/lib/hooks');
const {sequelize} = require('../utils/db.js')
const DataTypes = require('sequelize');

const Violation = sequelize.define('Violation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    linkURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ViolationType: {
        type: DataTypes.ENUM('Spam', 'Malware', 'Fake news'),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    status: {
        type: DataTypes.ENUM('Under Review', 'Resolved'),
        defaultValue: 'Under Review'
    },
}, {
    Hooks: {
        beforeCreate: (violation) => {
            violation.source = extractDomain(violation.linkURL);
        },
        afterCreate: (violation) => {
            violation.source = extractDomain(violation.linkURL)
        }
    }
});

const extractDomain = (url) => {
    try{
        const parsedUrl = new URL(url);
        console.log(parsedUrl);
        
        return parsedUrl.hostname.replace('www.', '').split('.')[0];
    }
    catch(error) {
        console.error('Invalid URL:', url);
        return null;
    }
}

module.exports = {Violation}    
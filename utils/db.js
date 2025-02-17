
const Sequelize = require('sequelize')

const dotenv = require('dotenv')

dotenv.config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: "mysql"
    }
);

const connectDB = async() => {
    try{
        await sequelize.authenticate;
        await sequelize.sync();
        console.log("Database connected successfully");
    }
    catch(error) 
    {
        console.log("Can't connect to Database", error);
        process.exit(1);
    }
};

module.exports = {connectDB, sequelize}
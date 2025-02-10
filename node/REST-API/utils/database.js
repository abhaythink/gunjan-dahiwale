// import dotenv from 'dotenv';

// dotenv.config();

import  dotenv from 'dotenv';
dotenv.config();

import {Sequelize, DataTypes} from 'sequelize';

// Debugging: Check if env variables are loaded
console.log("MYSQL_DATABASE:", process.env.MYSQL_DATABASE);
console.log("MYSQL_USER:", process.env.MYSQL_USER);
console.log("MYSQL_PASSWORD:", process.env.MYSQL_PASSWORD ? "*****" : "Not Set");
console.log("MYSQL_HOST:", process.env.MYSQL_HOST);

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

// Test Database Connection
(async () => {
  try {
    console.log("executing")
    // await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("executed")
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();



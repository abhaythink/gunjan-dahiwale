import  dotenv from 'dotenv';
dotenv.config();

import {Sequelize} from 'sequelize';

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
export const connectDB = async () => {
  try {
    await sequelize.authenticate(); // ✅ Check DB connection
    await sequelize.sync({ alter: true }); // ✅ Sync models
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1); // Stop the server if DB connection fails
  }
};


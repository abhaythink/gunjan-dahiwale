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
(async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();



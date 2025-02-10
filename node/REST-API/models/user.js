import {Sequelize, DataTypes} from 'sequelize';
import {sequelize} from '../utils/database.js'

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,   
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: DataTypes.INTEGER,
        unique: true,
    }
})

// Sync Database
(async () => {
    try {
      await sequelize.sync({ alter: true });  // ⚠️ This updates schema without dropping data
      console.log("✅ Database synchronized successfully.");
    } catch (error) {
      console.error("❌ Error syncing database:", error);
    }
  })();

export default User;
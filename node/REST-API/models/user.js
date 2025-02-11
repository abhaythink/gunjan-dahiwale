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
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: DataTypes.INTEGER,
    }
});

// Sync Database
(async () => {
    try {
      await sequelize.sync({ alter: true });  // ⚠️ This updates schema without dropping data
      console.log("✅ Database synchronized successfully.");
    } catch (error) {
      console.error("❌ Error syncing database:", error);
    }
  })();

// (async () => {
//     try {
//         await sequelize.getQueryInterface().removeIndex('Users', 'email');
//         console.log("✅ Phone index dropped successfully.");
//     } catch (error) {
//         console.error("❌ Error dropping phone index:", error);
//     }
// })();


export default User;
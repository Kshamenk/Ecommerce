const { DataTypes } = require("sequelize");

module.exports = (database) => {
   database.define('Comment', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    productId: {
      type: DataTypes.UUID,
      
    },
    text: {
      type: DataTypes.TEXT,
      
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
  });

}

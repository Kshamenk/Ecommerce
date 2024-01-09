  const { DataTypes } = require("sequelize")


  module.exports = (database) => {
    database.define("User",{
        id : {
            type: DataTypes.UUID,
            primaryKey : true,
            defaultValue: DataTypes.UUIDV4
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            //unique : true
        },
        picture: {
            type: DataTypes.STRING,
            //allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user", // Por defecto, todos los usuarios tendrán el rol "user"
        }
    },{timestamps:false})
  }
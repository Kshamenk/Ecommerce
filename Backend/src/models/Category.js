const { DataTypes } = require("sequelize");



module.exports = (database) => {
    database.define("Category", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     notEmpty: {
            //         msg: "Name is required",
            //     },
            // },
        }
    }, { timestamps: false }
    );
};
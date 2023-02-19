const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "gender",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },

    );
};
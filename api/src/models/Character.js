const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "character",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            species: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image : {
                type: DataTypes.STRING,
                allowNull: true,
            },
            createdInDb: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {timestamps: false}
    );
};
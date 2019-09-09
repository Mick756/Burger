module.exports = function(sequelize, DataTypes) {

    let Burgers = sequelize.define("Burgers", {

            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            eaten: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        });
    return Burgers;
};

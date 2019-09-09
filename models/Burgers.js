module.exports = function(sequelize, DataTypes) {

    let Burgers = sequelize.define("Bite", {

            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            eaten: {
                type: DataTypes.BOOL,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        });
    return Burgers;
};

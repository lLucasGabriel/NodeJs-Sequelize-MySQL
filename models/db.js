const Sequelize = require("sequelize");

const sequelize = new Sequelize('postapp', 'root', 'Hunson$abadeer@@2022', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
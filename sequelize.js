const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'root', 'Hunson$abadeer@@2022', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then( function(){
    console.log("Conectado com sucesso!")}
).catch( function(error) {
    console.log("Falha ao se conectar: " + error)
})
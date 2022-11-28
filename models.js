const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'root', 'Hunson$abadeer@@2022', {
    host: "localhost",
    dialect: "mysql"
});

//CREATE TABLE
const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
});

Postagem.create({
    titulo: "NewsLetter",
    conteudo: "lorem ipsum dolor"
})

//CREATE TABLE
const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Lucas Gabriel",
    sobrenome: "Moura Soares",
    idade: 19,
    email: "lucas@email.com"
})

//Usuario.sync({force: true});
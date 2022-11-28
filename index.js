const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const Post = require('./models/Post')

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/cad', (req, res) => {
    res.render('form')
})

app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts})
    })
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((error) => {
        res.send("Houve um erro: " + error)
    });
})

app.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(() => {
        res.send("Postagem deletada com sucesso!")
    }).catch((error) => {
        res.send("Postagem não existe")
    })
});

app.listen(3000, () => {
    console.log("Servidor Rodando...")
});
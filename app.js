//Imports
const express = require('express')
const BodyParser = require('body-parser')
const connectDB = require('./server/Model/database.js');
const insertOne = require('./server/Controller/controllerInsert.js')
const removeData = require('./server/Controller/controllerDelete.js')

const dotenv = require('dotenv')
dotenv.config()

//Utilizando app
const app = express()

//Definindo porta local
const port = process.env.PORT || 3000;

//Configurações de app
app.use(express.static('public'))
app.set('views', './views'); 
app.set('view engine', 'ejs');

//Metodos get (renderização)
const routes = require('./server/routes/router');

app.use('/', routes);
app.use('/delete', routes);

app.get('/add', (req, res) =>{
    res.render('add')
})

app.get('/delete', BodyParser.urlencoded({extended: false}), (req, res) => {
    let nome = req.body.message; 

    console.log('Data é: ' + JSON.stringify(nome))
})

//Metodo post (inserção de dados)
app.post('/add', BodyParser.urlencoded({extended: false}), (req, res) =>{
    let nome = req.body.name;
    insertOne(nome)
    res.redirect('/')
})

connectDB()

app.listen(port, ()=>{
    console.log('listening on port ' + port)
})


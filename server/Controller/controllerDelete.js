require('../Model/database');
const Schema = require('../Schema/schema');
const BodyParser = require('body-parser')

const RemoveData = async function(req, res) {

    //Delete
    try {
    await Schema.deleteOne({ name: 'Arthur' });

    const limitNumber = 20;
    const List = await Schema.find({}).limit(limitNumber);
    
    res.render('index', {title: 'Home', List}); 

    } catch (error) {
    console.log(error);
    }
}

//Remoção de dados do banco de dados
module.exports = RemoveData
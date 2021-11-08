require('../Model/database');
const Schema = require('../Schema/schema');

//Inserção de dados no banco de dados
exports.homepage = async(req, res)=>{
    try{

        const limitNumber = 20;
        const List = await Schema.find({}).limit(limitNumber);

        res.render('index', {title: 'Home', List}); 
        
    }catch (error){
        console.log('err ' + error);
    }
}

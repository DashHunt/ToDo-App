const Schema = require('../Schema/schema');

//Inserção de dados no banco de dados
module.exports = async function insertOne(string){
    try{
        await Schema.insertMany([
            {
                "name": string
            },
        ]);
    }catch (error){
        console.log('err ' + error);
    }
}

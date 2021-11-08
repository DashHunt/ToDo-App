const moongoose = require('mongoose')

const categorySchema = new moongoose.Schema({
    name: {
        type: String,
        required: 'This is required',
    }, 
});

module.exports = moongoose.model('Schema', categorySchema)
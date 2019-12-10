const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aboutSchema = new Schema({
    title:String,
    content:String,
    section:String
});
module.exports = mongoose.model('aboutPage', aboutSchema);  
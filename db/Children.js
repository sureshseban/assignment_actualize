const { Schema, model } = require('mongoose');

const childrenSchema = new Schema({
    "Child Part Number": String,
    "Child Part Description": String,
    "item reference number": Number,
    "quantity production": Number
});

module.exports = model('childrens', childrenSchema);    
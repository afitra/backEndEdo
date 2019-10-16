var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    participant:{
        type: Array,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    time:{
        type: Array,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdAt:  {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    },

});

let Event = mongoose.model('Events', eventSchema)


module.exports = Event
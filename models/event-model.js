var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    participant: {
        type: Array,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    timeStart: {
        type: Number,
        required: true
    },
    timeEnd: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: false
    },
    updatedAt: {
        type: String,
        required: false
    }


});

let Event = mongoose.model('Events', eventSchema)


module.exports = Event
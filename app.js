const MongoClient = require('mongodb').MongoClient;
require('dotenv/config')
// const assert = require('assert');
// Connection URL
const url = process.env.url;
const uri = process.env.newUri;
// Database Name
const dbName = process.env.dbName;

 
// Create a new MongoClient
const client = new MongoClient(url, {
    useNewUrlParser: true
});


const express = require('express'),
    app = express(),
    routerEvent = require('./routers/routerEvent'),
    port = process.env.port,
    cors = require('cors'),
    mongoose = require('mongoose');


mongoose.set('findAndUpdate', false)
mongoose.Promise = global.Promise;
mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('Connecting');
})
.catch((err)=>{
    console.log('Connection error',err);

})

console.log(`${url}${dbName}`)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extends: false
}))

app.use('/event', routerEvent)
module.exports = app

app.listen(port, function () {
    console.log(`live on DB ${dbName} ######*******`);
    console.log(`live on port ${port} ######*******`);

})
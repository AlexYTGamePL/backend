// Express
const express = require('express')
const app = express()
var routes = require('./routes/routes.js')

//Mongoose

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


// Code

mongoose.connect("mongodb://127.0.0.1:27017/justCity")
.then(() => {
    console.log("Connacted")
})
.catch(err => {
    console.log("ERROR: ", err)
})

app.listen(9992, function check(error){

    if(error){
        console.log(error)
    }
    else{
        console.log("STARTED")
    }

});

app.use(express.json());
app.use(routes);
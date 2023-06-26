const mongoose = require('mongoose');


const connection = mongoose.connect("mongodb+srv://Admin:TechGlide@cluster0.jsk2z6k.mongodb.net/token?retryWrites=true&w=majority");

module.exports ={connection}



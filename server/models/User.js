const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    userType: { 
        type: String, 
        enum : ['normal','admin'], 
        default: 'normal' 
        }, 
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        
    },
    password: {
        type: String,
        required:true
    },
    occupation : {
        type: String,
        required:true
        
    },
    country : {
        type : String,
        required:true

    },
    mobile : {
        type: String,
        required:true
    }

}) 

module.exports = mongoose.model('user', userSchema)
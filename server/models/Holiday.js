const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({

    user : {
    type: mongoose.Schema.Types.ObjectId,
    ref:'users'
    },
    
    type : { 
        type: String,
        required:true
    },
    title : {
        type: String,
        required: true
    },
    comment : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required : true
    },
    status : {
        type: Boolean,
        required: true
    },
    status_date : {
        type: Date
    },

})
module.exports = mongoose.model('holiday', holidaySchema)


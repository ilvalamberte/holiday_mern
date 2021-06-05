require('dotenv').config

const mongoose = require('mongoose')

const url = process.env.URL

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://holiday_user:holidayuseR123@cluster0.zvuuq.mongodb.net/Nordea_Holiday?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true,
        useFindAndModify: true})
        console.log('Connected to MongoDB')

    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}


module.exports = connectDB

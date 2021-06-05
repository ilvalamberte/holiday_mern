const express = require('express')
const app = express();

const connectDB = require('../server/config/db.js')

connectDB();

//before routes initialize middleware

app.use(express.json({extended: true}))

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth.js'));
app.use('/holidays', require('./routes/holidays.js'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at ${PORT} `))
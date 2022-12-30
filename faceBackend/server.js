require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())



app.use('/user', require('./routes/userRouter'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>
{
    if (err) throw err
    console.log('connected to mongoDB');
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () =>
{
    console.log(`Server is running on port ${ PORT }`);
})
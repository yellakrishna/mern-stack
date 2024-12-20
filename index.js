const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const cookieParser = require('cookie-parser')

const userRoute = require('./routes/userRoutes')

const port = process.env.PORT || 3000

const app = express();

app.use(express.json());

app.use(cors())

app.use(cookieParser())




app.use('/user', userRoute)

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("Failed to connect database ", err))

app.listen(port, () => {
    console.log("server is running.. 3000")
})
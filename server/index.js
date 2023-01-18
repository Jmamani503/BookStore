require('dotenv').config()

const cors = require('cors');
const express = require('express');
require('./connection')

const app = express();


const PORT = process.env.PORT || 5000;
//middlewares
app.use(cors())
app.use(express.json())
app.listen(PORT, () => console.log('Server is running'))

//routes
app.get('/', (req,res)=>{
    res.send('Hey :D')
})

//route for books
app.use('/books',require('./routes/book'))
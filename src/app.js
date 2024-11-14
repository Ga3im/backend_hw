const express = require('express');
const mongo = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const bodyParser = require('body-parser');

dotenv.config();

const { 
    PORT = 3005,
    API_URL = "http://127.0.0.1",
    MONGO_URL = "mongodb://127.0.0.1:27017/hwlatest"
} = process.env;

try {
    mongo.connect(MONGO_URL);
    console.log('Connected to MongoDB');
} catch (error) {
    handleError(error); 
}

const app = express();

const helloWorld = (req, res)=>{
    res.status(200);
    res.send('Hello World')
  }

const error404 = (req, res) =>{
    res.status(404);
    res.send("Страница не найдена или был запрошен несуществующий роут.")
}

app.use(bodyParser.json());

app.get('/', helloWorld);

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, ()=>{
    console.log(`Сервер запущен по адресу: ${API_URL}:${PORT}`)
});
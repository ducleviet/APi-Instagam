require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const connectDB = require('./sever/config/db');


const app = express();
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

//ConnectDB 
connectDB();


app.use('/', require('./sever/router/main'));


app.listen(3000);
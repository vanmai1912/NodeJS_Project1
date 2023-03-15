
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const route = require('./src/routes')

const app = express();

app.use(express.static(path.join(__dirname,'src')));

//http logger
app.use(morgan('combined'));


//template engine

app.engine('handlebars', hbs.engine(
   
));

app.set('view engine', 'handlebars');

// xem đường dẫn
//console.log(path.join(__dirname,'src/resources/views'));

app.set('views', path.join(__dirname,'src/views'))


//routes init
route(app);



const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');


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

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/news', function (req, res) {
    res.render('news');
  })

app.listen(3000)

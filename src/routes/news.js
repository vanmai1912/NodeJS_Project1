const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsControllers');

//newsController.index;

route.use('/:slug', newsController.slug);
route.use('/', newsController.index);

module.exports = route;

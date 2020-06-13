/**
 * Read News Website
 * author : suonran
 * version : 1.0.0
 * date : 12/06/2020
 */

const express = require('express');
const route = express.Router();

const controller = require('../controller/theThao');

route.get('/',controller.Open);

module.exports = route;
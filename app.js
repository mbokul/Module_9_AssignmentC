const express = require('express');
const app = new express();
const router = require('./src/routes/api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(expressMongoSanitize());
app.use(helmet());
app.use(hpp());

const limiter = expressRateLimit({
   windowMs: 2 * 60 * 1000, // 2 minutes
   max: 50,
});
app.use(limiter);

app.use('/api', router);

app.use('*', (req, res) => {
   res.status(404).json({ status: 'Failed', message: 'Invalid' });
});

module.exports = app;

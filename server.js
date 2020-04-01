var express = require('express');
var cors = require('cors');
var apiMocker = require('connect-api-mocker');

var app = express();
app.use(cors());
app.use('/api', apiMocker('api'));

app.listen(9000);
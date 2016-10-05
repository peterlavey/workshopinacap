/*jslint node:true*/
'use strict';

const http = require('http'),
Express = require('express'),
bodyParser = require('body-parser'),
hostname = '127.0.0.1',
port = Number(process.env.PORT || 3000),
app = new Express();

//Config
require('./config.js')(app, Express, bodyParser);

//Headers
require('./headers.js')(app);

//Routes
require('./routes/public.js')(app);

app.listen(port, ()=> console.info('Server run on port ' + port));

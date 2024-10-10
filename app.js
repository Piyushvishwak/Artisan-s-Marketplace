const session = require('express-session');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/', routes);

app.listen(5000, function() {
    console.log('Server is running on port 5000');
});

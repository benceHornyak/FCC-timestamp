const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const timestampRoutes = require('./routes/timestampRoutes');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

//Express application will listen to port mentioned in our configuration
app.listen(port, function (err) {
    if (err) throw err;
    console.log(`App listening on port ${port}`);
});

app.use('/api', timestampRoutes);
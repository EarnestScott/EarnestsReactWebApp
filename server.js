const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const commentRouter = require('./routes/commentRouter');
const app = express();
const fs = require('fs');

let rawdata = fs.readFileSync('./config.json');
let config = JSON.parse(rawdata);
mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPass}@${config.dbUrl}/${config.dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to mongodb");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log("body", req.body);
    res.json(
        `I received your POST request. This is what you sent me: ${req.body}`,
    );
});
app.use('/comments', commentRouter);
module.exports = app;

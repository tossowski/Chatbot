'use strict';


const {WebhookClient} = require('dialogflow-fulfillment');
const express = require('express');
var https = require('https');
const bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var options = {
    key: fs.readFileSync('./client-key.pem'),
    cert: fs.readFileSync('./client-cert.pem')
};

function WebhookProcessing(req, res) {
    const agent = new WebhookClient({request: req, response: res});

    console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));

    console.log(JSON.stringify(req.body.queryResult.queryText));
    console.log(JSON.stringify(req.body.queryResult.fulfillmentText));

}

app.get('/', (req, res) => {
    console.log("in get request")
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.post('/fulfillment', function (req, res) {
    console.log("in post request")
    WebhookProcessing(req, res);
});

const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}...`);
// });

https.createServer(options, app).listen(PORT);
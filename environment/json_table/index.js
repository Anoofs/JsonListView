const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
const port = process.env.PORT;

const agentRoutes = require('./routes/agentRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/agents', agentRoutes);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log("App is running on port " + port);
});

app.get('/', (req, res) => {
    res.sendFile("index.html");
});
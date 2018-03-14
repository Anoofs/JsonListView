const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
    db.Agents.find().limit(50)
    .then((agents) => {
        res.json(agents);
    })
    .catch((err) => {
        res.send(err);
    })
});

router.get('/all', function(req, res) {
    db.Agents.find()
    .then((agents) => {
        res.json(agents);
    })
    .catch((err) => {
        res.send(err);
    })
});

router.get('/find', function(req, res) {
    db.Agents.find({ $text: { $search: req.query.search } })
    // var regex = new RegExp(".*" + req.query.search + ".*");
    // db.Agents.find({ "firstname": { $regex: regex } })
    .then((agents) => {
        res.send(agents);
    })
    .catch((err) => {
        res.send(err);
    })
})

module.exports = router;
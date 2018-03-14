var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/agent-db');

mongoose.Promise = Promise;

module.exports.Agents = require("./agentData");
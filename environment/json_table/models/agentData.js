const mongoose = require('mongoose');
const rawData = require('./rawData');

let agentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        index: true
    },
    lastname: {
        type: String,
        index: true
    },
    email: {
        type: String,
        index: true
    },
    agency_name: {
        type: String,
        index: true
    }
});
agentSchema.index({ firstname: "text"});
let Agents = mongoose.model('Agents', agentSchema);

rawData.forEach((dataItem) => {
    Agents.create(dataItem);
});

module.exports = Agents;

const mongoose = require('mongoose');

let listSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: 'You need to specifie a name'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});

module.exports = mongoose.model('List', listSchema);

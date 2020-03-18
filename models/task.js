const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: 'You need to specify a name'
    },
    listId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'List'
    },
    status: {
        type: 'boolean',
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);

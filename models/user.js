const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: 'You need to specifie a name'
    },
    lastname: {
        type: 'string',
        required: 'You need to specifie a lastname'
    },
    email: {
        type: 'string',
        required: 'You need to specifie a email',
        unique: true
    },
    password: {
        type: 'string',
        required: 'You need to specifie a password'
    }
});

module.exports = mongoose.model('User', userSchema);

const User = require('../models/user'),
bcrypt = require('bcrypt');

exports.register = function(req, res) {
    var hash = bcrypt.hashSync(req.body.password, 10);
    User.create({name: req.body.name, lastname: req.body.lastname, email: req.body.email, password: hash }, function(err, data) {
        if(err)
            res.send(err)
        else
            res.send(data);
    });
}

exports.login = function(req,res) {
    //find
    User.findOne({email: req.body.email }, function(err, user) {
        if(err)
            res.status(400).send(err)
        else if (!user)
            res.status(204).send()
        else
        {
            let comparate = bcrypt.compareSync(req.body.password, user.password);
            if (comparate) {
                var token = jwt.sign({ id: user.id, name: user.name }, 'sdq/ff?;sdqsf');
                res.status(200).send(token)
            }
            else
                res.status(204).send()
        }
    });
};

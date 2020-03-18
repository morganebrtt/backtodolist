const List = require('../models/list');

exports.newlist = function(req,res) {
    // create
    jwt.verify(req.headers['x-access-token'], 'sdq/ff?;sdqsf', function(err, decoded) {
        if(err)
            res.send(err)
        else {
            List.create({name: req.body.name, userId: decoded.id}, function(err, data)
            {
                if(err)
                    res.send(err)
                else
                    res.send(data);
            });
        }
    });
};

exports.deleteList = function(req, res) {
    // delete
    List.deleteOne({_id: req.params.id}, function(err, data)
    {
        if(err)
            res.send(err)
        else
            Task.deleteMany({listId: req.params.id}, function(err, data) {
                if(err)
                    res.send(err)
                else
                    res.send('la suppresion des tâches a bien été effectuée');
            });
        });
}
const Task = require('../models/task');

exports.newTask = function (req,res) {
    Task.create({name: req.body.name, listId: req.body.listId}, function(err, data)
    {
        if(err)
            res.send(err)
        else
            res.send(data);
    });
};

exports.deleteTask = function (req,res) {
    Task.deleteOne({_id: req.params.id}, function(err, data) {
        if(err)
            res.send(err)
        else
            res.send('la suppresion de la tâche a bien été effectuée');
    });
};

exports.changeStatus = function (req,res) {
    // update
    Task.updateOne({_id: req.params.id}, {$set: {status: req.body.status}}, function(err, data) {
        if(err)
            res.send(err)
        else
            res.send(data);
    });
}

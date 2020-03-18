// Déclarations des dépendances

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// Initialisation de la connexion a la base de données
mongoose.connect('mongodb://localhost/todoList', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Récuperation des models
// let User = require('./models/user');
// let List = require('./models/list');
// let Task = require('./models/task');

// Récuperation des controllers
let AuthController = require('./controllers/auth');
let listController = require('./controllers/listController');
let taskController = require('./controllers/taskController');

// Déclarations des routes de notre application
app.route('/register').post(AuthController.register);

app.route('/login').post(AuthController.login);

app.route('/newlist').post(listController.newlist);

app.route('/deletelist/:id').delete(listController.deleteList);

app.route('/newtask').post(taskController.newTask);

app.route('/deletetask/:id').delete(taskController.deleteTask);

app.route('/changestatus/:id').put(taskController.changeStatus);

// Mise en écoute de notre application (sur le port 3000)
app.listen(3000);

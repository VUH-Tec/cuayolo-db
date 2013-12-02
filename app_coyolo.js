var express = require('express')
  , app = express() ///FrameWork inicializacinnn
  , cons = require('consolidate') // Adaptador de templates
  , MongoClient = require('mongodb').MongoClient // Driver para manejar la conexinnn a MongoCLient
  , routes = require('./routes'); // Rutas de la aplicacinnn

MongoClient.connect('mongodb://localhost:27017/coayolo_test', function(err, db) {
    "use strict";
    if(err) throw err;

    //Registra el adaptador de template y la template
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    //Express middleware que sirve para el acceso a coockies de la aplicacinnn
    app.use(express.cookieParser());

    //Express middleware para poblar al req.body elemento, que tiene acceso alas variables POST
    app.use(express.bodyParser());

    //Las rutas de la aplicaciiin
   //routes(app, db);

    app.listen(3000);
    console.log('Express escuchando en el puerto 3000');
});

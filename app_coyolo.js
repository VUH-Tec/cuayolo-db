var express = require('express')A
  , app = express() ///FrameWork inicializacinnn
  //, cons = require('consolidate') // Adaptador de templates
  //, MongoClient = require('mongodb').MongoClient // Driver para manejar la conexinnn a MongoCLient
  //, routes = require('./routes') // Rutas de la aplicacinnn
  , mongoose = require('mongoose')
  , CoayoloDAO = require('./CoayoloDAO');

  mongoose.connect('mongodb://localhost/test2');
  //Variable Global
  var coayoloDAO = new CoayoloDAO();

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.cookieParser());
    app.use(express.bodyParser());
  });

  // Modelos!!
  var Avatars = mongoose.model('avatar', coayoloDAO.Avatar)
    , Pieles = mongoose.model('piel', coayoloDAO.Piel)
    , Cabellos = mongoose.model('cabello', coayoloDAO.Cabello)

    , Casas = mongoose.model('area', coayoloDAO.Casa)
    , Experimento = mongoose.model('experimento', coayoloDAO.Experimento)
    , Escuelas = mongoose.model('escuela', coayoloDAO.Escuela)
    , Misiones = mongoose.model('mision', coayoloDAO.Mision)
    , Alumnos = mongoose.model('alumno', coayoloDAO.Alumno)

    , Preghc = mongoose.model('preghc', coayoloDAO.Preghc)
    , Reshc = mongoose.model('reshc', coayoloDAO.Respuestashc)
    , Preggral = mongoose.model('preggral', coayoloDAO.Preggral)
    , Respgral = mongoose.model('respgral', coayoloDAO.Respuestasgral)

    , HcAll = mongoose.model('hcall', coayoloDAO.hcAll)
    , GralAll = mongoose.model('gralAll', coayoloDAO.gralAll)

    , Administrador = mongoose.model('admin', coayoloDAO.Administrador)
    , Publicacion = mongoose.model('publicacion', coayoloDAO.Publicacion)
    , Notificaciones = mongoose.model('notificaciones', coayoloDAO.Notificaciones);

  var notificaciones = new Notificaciones({
    id_notificacion : 0,
    texto_notificacion : 'Manzanero',
    id_alumnos: 0,
    id_publicacion : 0
  });

  var publicacion = new Publicacion({
    id_publicacion : 0,
    fecha_publicacion : new Date(),
    texto_publicacion : 'Manzanito acaba de publicar',
    id_alumnos : 0
  });
  
  var administrador = new Administrador({
    id_admin : 0,
    nombre_admin : 'Jorge',
    pass_admin : 'oidhas87d6asdh'
  });

  var preguntashc = new Preghc({
    id_preghc : 0,
    descripcion_hc : 'quien es mejor griffindor o slythering',
    id_mision : 0,
    id_casa : 0
  })

  var respuestashc = new Reshc({
      id_respuestashc : 0,
      texto_resp_hc : 'Depende... lol!!',
      f_v_hc : true,
      preghc_id_preghc : 0
    });

  var preggral = new Preggral({
    id_preggral : 0,
    descripcion_gral : 'Hidalgo formulo las preguntas',
    id_casa : 0,
    id_mision : 0
  });

  var respgral = new Respgral({
    id_respuestasgral : 0,
    texto_resp_gral : 'Hidalgo es pelnnn',
    f_v_gral : true,
    id_preggral : 0
  });

  var hcAll = new HcAll({
      phc : [preguntashc],
      rhc : [respuestashc]
  });

  var gralAll = new GralAll({
      pgral : [preggral],
      rgral : [respgral] 
  });
  


  var piel = new Pieles({
    id_cabello : 0,
    url_cabello : 'www.manzana.com'
  });

  var cabello = new Cabellos({
    d_cabello : 0,
    url_cabello : 'www.manzana.com'
  });

  var avatar = new Avatars({
    id_avatar : 0,
    url_avatar : 'www.google.com',
    alumnos_id_alumnos : 0,
    piel : [piel],
    cabello : [cabello]
  });
  ///////////////////////////
  var escuela = new Escuelas({
    id_escuela : 0,
    nombre_esc : 'Escuela Manuel Alcala Martin'
  });

  var mision = new Misiones({
    id_mision : 0,
    nombre_mision : 'grifindor',
    avance : 5,
    fecha_ini_mision : new Date()
  });

  var experimento = new Experimento({
    id_experimento : 0,
    descripcion_experimento : 'Maestraso experimento',
    id_experimento : 0
  });

  var casa = new Casas({
    id_casa : 0,
    nombre_casa : 'Griffindor',
    id_administrador : Number
  });

  var alumno = new Alumnos({
    id_alumno : 0,
    id_avatar : 0,
    matricula : 'r157ehd',
    nombre_usu : 'Iddar Gonzales',
    id_avatar : 0,
    sexo : 'Nio',
    pass : 'que es esto??',
    fecha_nacimiento : '08/09/1993',
    escuela : [escuela],
    experimento : [experimento],
    casa : [casa],
    misiones : [mision]
  });


  ///////////////////////////////////////////////////////
  avatar.save(function(err){
    if(err) throw err;
    console.log('guardado');
  });

  alumno.save(function(err){
    if(err) throw err;
    console.log('Guradado alumno');
  });

  hcAll.save(function(err){
    if(err) throw err;
    console.log('Guardando preguntas');
  });

  gralAll.save(function(err){
    if(err) throw err;
    console.log('Guardando preguntas');
  });

  administrador.save(function(err){
    if(err) throw err;
    console.log('Guardando administrador');
  });

  notificaciones.save(function(err){
    if(err) throw err;
    console.log('Guardando notifaciones');
  });

  publicacion.save(function(err){
    if(err) throw err;
    console.log('Guardando publicacion');
  })

  app.get('/', function(req, res){
    
  });

  mongoose.disconnect();

  //Las rutas de la aplicacinnn
  //routes(app, db);
  
  console.log('Express escuchando en el puerto ' + 3000 );

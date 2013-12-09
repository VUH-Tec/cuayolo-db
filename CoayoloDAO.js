var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function CoayoloDAO(){
    
    if (false === (this instanceof CoayoloDAO)) {
        console.log('Warning: CoayoloDAO constructor called without "new" operator');
        return new CoayoloDAO();
    }
    
    
    //fix
    this.Alumno = new Schema({
	//hay dos campos que pueden usarse como id_alumno con cual nos vamos aquedar
	id_alumno : Number,
	id_avatar : Number,
	matricula : String,
	email : String,
	pass : String,
	nombre_usu : String,
	id_avatar : Number,
	sexo : String,
	pass : String,
	fecha_nacimiento : String,
	escuela : [],
	casa : [],
	misiones : []
	});
    /*
      db.alumnos.insert({
      id_alumno : 0, id_avatar : 0, matricula : 'whatever', id_avatar : 0,nombre_usu : 'none', sexo : 'hombre', pass : 'none',
      id_casa : 0, fecha_nacimiento : new Date(), area : [{ id_area : 0, nombre_area : 'hola'}], escuela : [{id_escuela : 0, nombre_escuela : 'ctin'}],
      misiones : [{id_mision : 0, nombre_mision : 'marte', avance : 0, fecha_ini_mision : new Date()}]
      })
      */

    this.Casa = new Schema({
	id_casa : Number,
	nombre_casa : String,
	id_administrador : Number
	});

    this.Escuela = new Schema({
	id_escuela : Number,
	nombre_esc : String
	});

    this.Mision = new Schema({
	id_mision : Number,
	nombre_mision : String,
	avance : Number,
	fecha_ini_mision : {type : Date, default : Date.now}
	});

    ////////////////////////////////
    //fix
    this.Avatar = new Schema({
	id_avatar : Number,
	url_avatar : String,
	alumnos_id_alumnos : Number,
	piel : [],
	cabello : []
	});

    this.Cabello = new Schema({
	id_cabello : Number,
	url_cabello : String
	});

    this.Piel = new Schema({
	id_piel : Number,
	url_piel : String
	});

    /*
      db.avatar.insert({
      id_avatar : 0, url_avatar : '/src/photo.jpg', alumno_id : 0, piel : [{id_piel : 0, url_piel : '/src/piel.jpg'}], cabello : [{id_cabello : 0, url_cabello : '/src/cabello.jpg'}]
      });
      Ejemplos de queries: encontrar avatar donde id_avatar sea mayor o igual a 1
      db.avatar.find({id_avatar : {$gte : 1}});
      Ejemplos de queries: encontrar avatar donde alumno_id sea mayor o igual a 10 y no projecta el id_avatar
      db.avatar.find({alumno_id : {$gte : 10}}, {id_avatar : 0});
      */
    
    this.Administrador = new Schema({
	id_admin : Number,
	nombre_admin : String,
	pass_admin : String
	});

    //Son como las misiones
    this.Experimento = new Schema({
	id_experimento : Number,
	descripcion_experimento : String,
	id_experimento : Number
	});


    /*
      db.casa.insert({
      id_casa : 0, nombre_casa : 'Griffindor', administrador : [{id_administrador : 0, nombre_administrador : 'vatslavds', pass_admin : 'Hola pass'}], 
      })
      */



    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////

    this.hcAll = new Schema({
	phc : [],
	rhc : []
	});

    this.gralAll = new Schema({
	pgral : [],
	rgral : []
	});

    this.Respuestashc = new Schema({
	id_respuestashc : Number,
	texto_resp_hc : String,
	f_v_hc : Boolean,
	preghc_id_preghc : Number
	});


    this.Preghc = new Schema({
	id_preghc : Number,
	descripcion_hc : String,
	id_mision : Number,
	id_casa : Number
	});

    this.Preggral = new Schema({
	id_preggral : Number,
	descripcion_gral : String,
	id_casa : Number,
	id_mision : Number
	});

    this.Respuestasgral = new Schema({
	id_respuestasgral : Number,
	texto_resp_gral : String,
	f_v_gral : Boolean,
	id_preggral : Number
	});

    /*
      Ejemplo de inserccinnn de datos
      db.preguntashc.insert({id_preghc : 0, descripcion_hc : "A los shumies les gustan las manzanas", id_misinnn : 0, id_casa : 0});
      db.respuestashc.insert({id_respuestashc : 0, texto_resp_hc : "Tienes raznnn, a los shumies ls gustan las manzanas", id_misinnn : 0, id_casa : 0});
      
      db.preguntasgral.insert({id_preggral : 0, descripcion_gral : "Mozart compositor alemdb.respuestasgral.insert({id_respuestasgral : 0, texto_resp_gral : "Cierto... Mozart es alem*/
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////



    this.Publicacion = new Schema({
	id_publicacion : Number,
	fecha_publicacion : {type : Date, default : Date.now},
	texto_publicacion : String,
	id_alumnos : Number
	});

    /*
      db.publicacion.insert({
      fecha_publicacion : new Date(), id_publicacion : 0, texto_publicacion : 'Hola mundo de ninos', no_arias : 1, id_alumno : 0
      });
      */

    this.Notificaciones = new Schema({
	id_notificacion : Number,
	texto_notificacion : String,
	id_alumnos: Number,
	id_publicacion : Number
	});
    /*
      db.notificaciones.insert({
      id_notificacion : 0, texto_notificacion : 'tal persona publico', id_alumnos : 0, id_publicacion : 0
      });
      */

    
    this.Rol = new Schema({
	//Moderador social, experimentos, admin
	id_rol : Number,
	nombre : String,

	});

    //contiene el test de ingreso alas casas
    this.Test = new Schema({
	id_alumno : Number,

	});


    this.Arias = new Schema({
	id_arias : Number,
	num_arias : Number,
	//alumnos : [Alumnos]
	});

    
}

module.exports = CoayoloDAO;


/*
  1.- AP sombrero
  2.- AP registro
  3.- AP avatar
  4.- 
*/

//fix
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function AvatarDAO(){
    this.Avatar = new Schema({
	id_avatar : Number,
	url_avatar : String,
	alumnos_id_alumnos : Number,
	piel : [Piel],
	cabello : [Cabello]
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
}

module.exports.AvatarDAO = AvatarDAO;

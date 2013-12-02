var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function CasaDAO(){
    this.Casa = new Schema({
	id_casa : Number,
	nombre_casa : String,
	id_administrador : Number
	});
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
}

module.exports.CasaDAO = CasaDAO;

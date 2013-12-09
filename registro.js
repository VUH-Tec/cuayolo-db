var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function RegistroDAO(){
    this.Registro = new Schema({
	id_alumno : Number,
	fecha_signup : {type : Date},
	terminos_condiciones : boolean,
	url_termino : String //
	});

    this.termino_condiciones : new Schema({
	url_terminO : String,
	contenido : String
    });
}

module.exports.CasaDAO = RegistroDAO;

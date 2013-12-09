var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function TestDAO(){
    this.test = new Schema({
	id_test : Number,
	nombre_test : String,
	preguntas_test : [], //Mapeo a preguntasTest Object
	respuestas_test : [] //Mapeo a respuestasTest Object
	});

    this.preguntaTest = new Schema({
	id_pregunta : Number,
	id_respuestaTest : Number,
	pregunta : String
	});

    this.respuestaTest = new Schema({
	id_respuesta : Number,
	id_preguntaTest : Number,
	respuestas : [], //Todas las posibles respuestas vienen aqui
	respuesta_correcta : String
	});
}

module.exports = TestDAO;

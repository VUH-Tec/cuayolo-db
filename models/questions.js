var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function PreguntasDAO(){

    var Respuestashc = new Schema({
	id_respuestashc : Number,
	texto_resp_hc : String,
	f_v_hc : Boolean,
	preghc_id_preghc : Number
	});


    var Preghc = new Schema({
	id_preghc : Number,
	descripcion_hc : String,
	id_mision : Number,
	id_casa : Number
	});

    var Preggral = new Schema({
	id_preggral : Number,
	descripcion_gral : String,
	id_casa : Number,
	id_mision : Number
	});

    var Respuestasgral = new Schema({
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
}

module.exports.PreguntasDAO = PreguntasDAO;

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
	id_area : Number,
	id_mision : Number
	});

    var Respuestasgral = new Schema({
	id_respuestasgral : Number,
	texto_resp_gral : String,
	f_v_gral : Boolean,
	preggral_id_preggral : Number
	});
}

module.exports.PreguntasDAO = PreguntasDAO;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function CoayoloDAO(){

    //fix
        this.Alumnos = new Schema({
                //hay dos campos que pueden usarse como id_alumno con cual nos vamos aquedar
                id_alumno : Number,
                matricula : String,
	        avatar : [Avatar],
                nombre_usu : String,
                sexo : String,
                pass : String,
                fecha_nacimiento : {type : Date, default : Date.now},
                area : [Area],
                //area_id_area : Number,
                escuela : [Escuela],
                //escuela_id_escuela : Number,
                casa : [Casa],
                //casa_id_casa : Number
                misiones : [Mision]
        });
        /*
                db.alumnos.insert({
                id_alumno : 0, id_avatar : 0, matricula : 'whatever', id_avatar : 0,nombre_usu : 'none', sexo : 'hombre', pass : 'none',
                id_casa : 0, fecha_nacimiento : new Date(), area : [{ id_area : 0, nombre_area : 'hola'}], escuela : [{id_escuela : 0, nombre_escuela : 'ctin'}],
                misiones : [{id_mision : 0, nombre_mision : 'marte', avance : 0, fecha_ini_mision : new Date()}]
                })
        */

        this.Area = new Schema({
                id_area : Number,
                nombre_area : String
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
                })
        */
        ////////////////////////////////////////
        ///////////////////////////////////////
        // Elimine estas dependecias        


        this.AlumnosHasMision = new Schema({
                alumnos_id_alumnos : Number,
                mission_id_mision : Number
        });

        this.PublicacionHasAlumnos = new Schema({
                publicacion_id_publicacion : Number,
                alumnos_id_alumnos : Number
        });

        this.AreaHasAlumnos = new Schema({
                area_id_area : Number,
                alumnos_id_alumnos : Number,
                puntos : Number
        });
        ////////////////////////////////////////////////
        ////////////////////////////////////////////////
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



        /////////////////////////////////////////////////////
        /////////////////////////////////////////////////////

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
                id_area : Number,
                id_mision : Number
        });

        this.Respuestasgral = new Schema({
                id_respuestasgral : Number,
                texto_resp_gral : String,
                f_v_gral : Boolean,
                preggral_id_preggral : Number
        });
        /////////////////////////////////////////////////////
        /////////////////////////////////////////////////////



        this.Publicacion = new Schema({
                fecha_publicacion : {type : Date, default : Date.now},
                id_publicacion : Number,
,                texto_publicacion : String,
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

}

module.exports.CoayoloDAO = CoayoloDAO;

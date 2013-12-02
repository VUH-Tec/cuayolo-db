var ErrorHandler = require('./error').errorHandler
  , Alumnos = require('./models./main:coayolo');

module.exports = exports = function(app, db) {

    // Middleware que busca a un usuario que este conectado
    //app.use(sessionHandler.isLoggedInMiddleware);


    // The main page of the blog, filtered by tag
    app.get('/', display);

    // Error handling middleware
    app.use(ErrorHandler);
}

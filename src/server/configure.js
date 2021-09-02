const { join } = require('path');
const path = require('path'), 
      routes = require('./routes'),
      express = require('express'),
      exphbs = require('express-handlebars'),
      //bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      morgan = require('morgan'),
      methodOverrride = require('method-override'),
      errorHandler = require('errorhandler');

module.exports = (app)=>{
    //Settings
    app.set('port',process.env.PORT||3000);

    //Views
    app.set('views',path.join(__dirname,"../views"));
    app.set('view engine', '.hbs');
    app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials']
       }));
   

    //Middleware
    app.use(morgan('dev'));
    app.use(express.urlencoded({'extended':true}));
    app.use(express.json());
    app.use(methodOverrride());
    app.use(cookieParser());

    //Routes
    routes(app); //Moving de routes to routes folder.

    //Public Static Files
    app.use('/public/',express.static(path.join(__dirname,'../public')));



    if('development' === app.get('env')){
        console.log('Development')
        app.use(errorHandler());
    }else{
        console.log('')
    }
    
    return app;
}

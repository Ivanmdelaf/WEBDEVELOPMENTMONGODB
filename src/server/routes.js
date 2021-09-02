const router = require('express').Router(),
      home = require('../controllers/home'),
      image = require('../controllers/images');

module.exports = (app)=>{
    router.get('/',home.index);
    router.get('/images/:image_id',image.index);
    router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);
    app.use(router);
}
module.exports=app=>{
    var controller=require('../controller/controller');
    var router=require('express').Router();
  
    router.get('/retrievesongs',controller.retrievesongs);


    app.use('/music',router);
}
module.exports=app=>{
    var controller=require('../controller/controller');
    var router=require('express').Router();
  
    router.get('/retrievesongs',controller.retrievesongs);
    router.get('/retrieve/resultsongs/:name',controller.retrieveresult);
   // router.get('/retrievedetails',controller.retrieveproduct);


    app.use('/music',router);
}
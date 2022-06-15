const productmodel=require('../models/model');

exports.retrievesongs=(req,res)=>{
    productmodel.retrieve((err,data)=>{
        console.log(data);
        if(err){
            res.json({Status:0, Message:"Can't Show the Details"} );

        }else{
            res.json({data});

        }
    });
}
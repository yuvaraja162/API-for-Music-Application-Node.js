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
exports.retrieveresult=(req,res)=>{

    const search=new productmodel({
        keyword :req.params.name,
        
    });
    //console.log(song);
    productmodel.retrieveresult(search,(err,data)=>{
      //  console.log(data);
        if(err){
            res.json({Status:0, Message:"Can't Show the Details"} );

        }else{
            //var a=json({data});
            //console.log(a[0]);
           // console.log(json({data}));
            res.json({data});

        }
    });
}



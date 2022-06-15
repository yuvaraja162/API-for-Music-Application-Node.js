const db=require('../db/db');

 const promodel=require('../controller/controller')

//retrieve the data
promodel.retrieve=(result)=>{
    var sqlQuery = `SELECT * FROM songs`;
    db.query(sqlQuery,(err,res)=>{
        //console.log(res);
        if(err){
            console.log(err);
        }else{
            result(null,res);
        }
    });
    
}

module.exports=promodel;
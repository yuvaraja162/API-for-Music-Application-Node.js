const db=require('../db/db');

 //const promodel=require('../controller/controller')

const promodel=function(productmodel){
    this.keyword=productmodel.keyword;
}
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
promodel.retrieveresult=(value ,result)=>{
    var sqlQuery = `SELECT * FROM songs WHERE 
    song_name LIKE "%${value.keyword}%" OR 
    song_album LIKE "%${value.keyword}%" OR 
    song_artist LIKE "%${value.keyword}%" 
    ` ;
    db.query(sqlQuery,(err,res)=>{
        //console.log(res);
        if(err){
            console.log(err);
        }else{
            //console.log(res);
            result(null,res);
        }
    });
    
}



module.exports=promodel;
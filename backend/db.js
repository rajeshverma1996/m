const mongoose= require("mongoose");

mongoose.connect('mongodb://localhost:27017/meanDB',(err)=>{
    if(!err){
        console.log('Database  connection successful');
    }else{
        console.error('error in connection','error details-',err)
    }
});

module.exports=mongoose;
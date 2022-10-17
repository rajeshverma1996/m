const mongoose=require('mongoose');

const Employee=mongoose.model('Employee',{
    name:{type:String},
    position:{type:String},
    dep:{type:String},
});

module.exports=Employee;
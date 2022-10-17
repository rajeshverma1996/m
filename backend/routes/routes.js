const express = require('express');
const router=express.Router();

const ObjectId=require('mongoose').Types.ObjectId;
const Employee=require('../models/employee.js');

// GET POST PUT DELETE

//Get api

router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{

        if(err){
            console.log('Error in get data','error-details-',+err);
        }else{
            res.send(doc);
        }
    })
});

//Get single Employee by id api

router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc)=>{

            if(err){
                console.log('Error in getById ','error details-'+err);
            }else{
                if(doc){
                    res.send(doc);
                }else{
                    return res.status(400).send("No Record found with id"+req.params.id)
                }
              
            }
        })
    }else{
        return res.status(400).send("No Record found with id"+req.params.id)
    }

   
});

//Post api

router.post('/',(req,res)=>{
    let emp= new Employee(
        {
            name:req.body.name,
            position:req.body.position,
            dep:req.body.dep,
        }
    );
    emp.save((err,doc)=>{
        if(err){
            console.log('Error in post ','error details-'+err);
        }else{
            res.send(doc);
        }
    });
});



//put single Employee by id api

router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp= {
            name:req.body.name,
            position:req.body.position,
            dep:req.body.dep,
        }
        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
           
        
            if(err){
                console.log('Error in updateById ','error details-'+err);
            }else{
                if(doc){
                    res.send("Data updated successfully",'new record-',doc);
                }else{
                    return res.status(400).send("No Record found with id"+req.params.id)
                }
            }
        })
    }else{
        return res.status(400).send("No Record found with id"+req.params.id)
    }

   
});


//delete single Employee by id api

router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err){
                console.log('Error in deleteById ','error details-'+err);
            }else{
                if(doc){
                    res.send("data deleted successfully");
                }else{
                    return res.status(400).send("No Record found with id"+req.params.id)
                }
            }
        })
    }else{
        return res.status(400).send("No Record found with id"+req.params.id)
    }

   
});


module.exports=router;

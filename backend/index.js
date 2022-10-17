const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require('./db.js');
const routes=require('./routes/routes.js')

const app=express();
const port = 3000
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.listen(port,()=> console.log('Server started at port-',port));

app.use('/employees',routes);
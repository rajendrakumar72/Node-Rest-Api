const { error } = require('console');
const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
require('dotenv').config({path:'./keys.env'});
const mongooseString=process.env.DATABASE_URL;

//Database Connection code
mongoose.connect(mongooseString);
const database=mongoose.connection;
database.on("error",console.error.bind(console,"connection error: "));
database.once("open", function () {
    console.log("Connected successfully");
  });

const app=express();
app.use(cors());
app.use(express.json());

const routes=require('./routes/routes');
app.use('/api',routes);


app.listen(8080,()=>{
    console.log('server started listing.....')
});
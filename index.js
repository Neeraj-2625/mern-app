
require('dotenv').config();
const mongoose = require('mongoose');

//cors "Cross Origin Resource Sharing"
const cors = require('cors');

//path for resolving paths
const path = require('path');

const express = require('express');
const morgan = require('morgan'); //logger
const productRouter = require('./routes/product');
const userRouter = require('./routes/users')
const server = express();

console.log('env',process.env.DB_PASSWORD);

//=== db collection code ===//
main().catch(err=>console.log(err));

async function main(){
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database se connect ho gya");
}

server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

//=== for utilizing routing of frontend ===//
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'));
})

///*****  Read GET /products *****////

server.listen(process.env.PORT,()=>{
  console.log('Server started');
});
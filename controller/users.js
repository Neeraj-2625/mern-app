// ===== isme product se related sara logic he =====//
const fs = require('fs');


const path = require('path');


const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json'),'utf-8'));
const users = data.users;

exports.getAllUsers = (req,res)=>{
    res.json(users);
  }

exports.getUser = (req,res)=>{
    const id = +req.params.id;
    const product = users.find(p => p.id === id);
    res.json(product);
  }

exports. createUser = (req,res)=>{
    users.push(req.body);
    res.json(req.body);
  }

exports.replaceUser = (req,res)=>{
    const id = +req.params.id;
    const index = users.findIndex(p=>p.id === id);
    users[index] = {...users[index],...req.body};
  
    res.json(users);
  }

exports. updateUser = (req,res)=>{
    const id = +req.params.id;
    const index = users.findIndex(p=>p.id === id);
    users[index] = {...req.body};
  
    res.status(201).json(users[index]);
  }
  
exports. deleteUser = (req,res)=>{
    const id = +req.params.id;
    const index = users.findIndex(p=>p.id === id);
    users.splice(index,1);
  
    res.status(201).json();
  }
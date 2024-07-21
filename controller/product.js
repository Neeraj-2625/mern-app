// ===== isme product se related sara logic he =====//
const fs = require('fs');
const model = require('../model/product');
const Product = model.Product;

exports.getAllProducts = async (req,res)=>{
    const products = await Product.find();

    res.json(products);
  }

exports.getProducts = async (req,res)=>{
    const id = req.params.id;
     
    const product = await Product.findById(id);
    res.json(product);
  }

exports.createProduct = async(req,res)=>{
    const product = new Product(req.body);

      const error = product.validateSync();
      if(error){
        res.status(400).json(error.message);
        return;
      }
      const result = await product.save();
      console.log(product._id);
      res.json(result);

  }

exports.replaceProduct = async (req,res)=>{
    const id = req.params.id;
    const product = await Product.findOneAndReplace({_id:id},{...req.body});
    res.json(product);
  }

exports. updateProduct = async (req,res)=>{
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({_id:id},{...req.body},{new:true});

    res.status(201).json(product);
  }
  
exports. deleteProduct = async (req,res)=>{
    const id = req.params.id;
    const index = await Product.deleteOne({_id:id});
  
    res.status(200).json(index);
  }
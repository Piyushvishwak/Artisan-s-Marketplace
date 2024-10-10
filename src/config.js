const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Login-tut')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("users",LoginSchema);
// const Product = mongoose.model("added-products", ProductSchema);

module.exports=collection;
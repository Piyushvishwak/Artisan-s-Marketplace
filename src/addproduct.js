const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/Login-tut', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('added-products', productSchema);

app.use(bodyParser.json());

app.post('/api/products', async (req, res) => {
  try {
    const { name, description, category, price, image } = req.body;
    const product = new Product({ name, description, category, price, image });
    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


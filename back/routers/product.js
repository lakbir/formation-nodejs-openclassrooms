const express = require('express');
const Product = require('../models/Product')
const router = express.Router();

app.post('/api/products', (req, res, next) => {
    delete req.body._id
    const product = new Product({
      ...req.body
    });
    product.save()
      .then(() => {
          res.status(201).json({message : 'Product added successfuly'})
      }).catch(error => {
        console.log('Error : ' + error)
          res.status(400).json({error})
      })
  });
  
  app.get('/api/products', (req, res, next) => {
    Product.find()
      .then(products => res.status(200).json(products))
      .catch(error => res.status(400).json({error}))
  })
  
  app.get('/api/products/:id', (req, res, next) => {
    Product.findOne({_id: req.params.id})
      .then(prd => res.status(200).json(prd))
      .catch(error => res.status(400).json({error}))
  })
  
  app.put('/api/products/:id', (req, res, next) => {
    Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Product modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });
  
  app.delete('/api/products/:id', (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Product supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
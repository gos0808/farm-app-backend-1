const ProductModel = require('../models/ProductModel')
    
module.exports.getProducts = async (req, res) => {
  const products = await ProductModel.find()
  res.send(products)
}

module.exports.saveProducts = async (req, res) => {
  const { name, category, price, newPrice, weight, season, img } = req.body;
  const newProduct = new ProductModel({name, category, price, newPrice, weight, season, img });
  await newProduct.save();
  res.send(newProduct);
}
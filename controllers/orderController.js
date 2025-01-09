const OrderModel = require('../models/OrderModel')

module.exports.getOrders = async (req, res) => {
    const orders = await OrderModel.find()
    res.send(orders)
  }

module.exports.saveOrder = async (req, res) => {
  const { orderId, quantity, totalPrice, userId  } = req.body;
  const newOrder = new OrderModel({orderId, quantity, totalPrice, userId });
  await newOrder.save();
  res.send(newOrder);
}
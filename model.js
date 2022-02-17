'use strict';

const mongoose = require('mongoose');

const addressModel = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

const productModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  num_in_stock: { type: Number },
  price: { type: Number },
  shipping: { type: Number }
})

const ordersModel = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'customers' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
});

const customerModel = new mongoose.Schema({
  name: { type: String, required: true },
  addresses: [addressModel],
  cart: {
    num_items: { type: Number },
    items: [
      {
        name: { type: String },
        price: { type: Number },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
      }
    ]
  },
  wish_list: [productModel],
  last_5_orders: [ordersModel]
});



const Customers = mongoose.model('customers', customerModel);
const Orders = mongoose.model('orders', ordersModel);

module.exports = { Customers, Orders };
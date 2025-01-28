import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// COD method
export const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Stripe method
export const placeOrderStripe = async(req, res) => {}

// RazorPay method
export const placeOrderRazorpay = async(req, res) => {}

// All orders data for admin
export const allOrders = async(req, res) => {}

// User orders data for clien
export const userOrders = async(req, res) => {}

// update orders status for admin
export const updateStatus = async(req, res) => {}
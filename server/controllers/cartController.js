// add product to cart

import userModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ message: "User not found", success: false });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ message: "Product added to cart", success: true });
  } catch (error) {
    res.json({ message: error.message, success: false });
    console.log(error);
  }
};

// update cart

export const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ message: "User not found", success: false });
    }

    let cartData = userData.cartData || {};

    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ message: "Cart updated", success: true });
  } catch (error) {
    res.json({ message: error.message, success: false });
    console.log(error);
  }
};

// get cart data

export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ message: "User not found", success: false });
    }

    let cartData = userData.cartData || {};
    res.json({ cartData, success: true });
  } catch (error) {
    res.json({ message: error.message, success: false });
    console.log(error);
  }
};

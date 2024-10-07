import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderDate: {
    type: Date,
    required: [true, "Order Date"],
    default: new Date(),
  },
  orderTotal: {
    type: Number,
    required: [true, "Order Total"],
  },
  orderNoofItem: {
    type: Number,
    required: [true, "Order Item"],
  },
  orderUserId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "User Id"],
  },
  orderItems: [
    {
      prodId: { type: mongoose.Types.ObjectId, ref: "Prod" },
      Qty: Number,
    },
  ],
  orderStatus: {
    type: String,
    required: [true, "Order Status"],
    default: "Pending",
  },
});

export const Order = mongoose.model("Order", orderSchema);

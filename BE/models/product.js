import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    images: [{ type: String }],
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    sizes: [
      {
        size: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("product", productSchema);

export default Product;

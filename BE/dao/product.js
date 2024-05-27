import Product from "../models/product.js";

const fetAllProduct = async () => {
  try {
    const allProduct = await Product.find({}).exec();
    return allProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};
const fetchProductById = async (id) => {
try {
    const product = await Product.findOne({_id: id}).exec()
    return product;
} catch (error) {
    throw new Error(error.message);
    
}
}

export default { fetAllProduct, fetchProductById };

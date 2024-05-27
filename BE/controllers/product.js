import { productDao } from "../dao/index.js";

const getAllProduct = async (req, res) => {
  try {
    const getALl = await productDao.fetAllProduct();
    res.status(200).json(getALl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await productDao.fetchProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default { getAllProduct, getProductById };

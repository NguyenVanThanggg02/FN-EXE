import express from 'express';
import { productController } from '../controllers/index.js';
import Product from '../models/product.js';
const productRouter = express.Router();

productRouter.get('/',productController.getAllProduct);

productRouter.get('/:id',productController.getProductById);
// productRouter.delete('/:id',productController.removeProductById);
// productRouter.post('/',productController.addProduct);
// productRouter.put('/:id', productController.updateProduct)

productRouter.get('/search/:name', async (req, res, next) => {
    try {
      const name = req.params.name
      const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
      const searchRgx = rgx(name);
  
      const searchResult = await Product.find({ name: { $regex: searchRgx, $options: "i" } }).exec()
      res.send(searchResult)
    } catch (error) {
      throw new Error(error.toString());
  
    }
  })
export default productRouter
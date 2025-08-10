import express from 'express';
const products = express.Router();
import productController from "../controllers/productController";

products.get("/", (req,res)=>productController.getAllProducts(req, res));
products.get("/:id", (req,res)=>productController.getProductsById(req, res));
products.post("/", (req,res)=>productController.addProduct(req, res));
products.put("/:id", (req,res)=>productController.updateProduct(req, res));
products.delete("/:id", (req,res)=> productController.deleteProduct(req, res));

export default products;
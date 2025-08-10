import { BaseController } from "./baseController"; // Fixed import
import { Request, Response } from "express";
import ProductService from "../helpers/productService";
import productService from "../helpers/productService";


class ProductController extends BaseController{

    async getAllProducts (req: Request, res: Response){

        try{
            const result = await ProductService.getAllProducts();

            if (result?.success){
                this.success(req, res, this.status.HTTP_OK, result?.data, "success" )
            }
            else { 
                this.errors(req, res, this.status.HTTP_BAD_REQUEST, "Fetching data failed");

            }

        } catch(error){ 

            console.log("getAllProducts ERROR in controller", error);
            this.errors(req,res, this.status.HTTP_INTERNAL_SERVER_ERROR, "Something went wrong" )
        }
    }


    async getProductsById(req: Request, res: Response){
        try{

            const productID = Number(req.params.id);
            const result = await ProductService.getProductsById(productID);

            if (result?.success){
                this.success(req, res, this.status.HTTP_OK, result?.data, "success")
            }
            else { 
                this.errors(req, res, this.status.HTTP_BAD_REQUEST, "Fetching data by id failed");

            }
        } catch(error){ 

            console.log("getAllProducts ERROR in controller", error);
            this.errors(req,res, this.status.HTTP_INTERNAL_SERVER_ERROR, "Something went wrong" )
        }
    }

    async addProduct(req: Request, res: Response){

        try{
            let {...body} = req.body;
            const result = await productService.addProduct(body);


            if (result.success){
                this.success(req, res, this.status.HTTP_OK, result?.data, "success")
            }
            else { 
                this.errors(req, res, this.status.HTTP_BAD_REQUEST, "Add failed");

            }
        }  catch(error){ 

            console.log("getAllProducts ERROR in controller", error);
            this.errors(req,res, this.status.HTTP_INTERNAL_SERVER_ERROR, "Something went wrong" )
        }
        
    }

    async updateProduct (req: Request, res: Response){

        try{
            let productId = Number(req.params.id)
            const updatedData = req.body;

            const result = await productService.updateProduct(productId, updatedData)

            if (result?.success){
                this.success(req, res, this.status.HTTP_OK, result?.data, "success")
            }
            else { 
                this.errors(req, res, this.status.HTTP_BAD_REQUEST, "Update failed");

            }
        }  catch(error){ 

            console.log("updateProduct ERROR in controller", error);
            this.errors(req,res, this.status.HTTP_INTERNAL_SERVER_ERROR, "Something went wrong" )
        }
        
    }
    
    async deleteProduct (req: Request, res: Response){
        try{
            let productId = Number(req.params.id);

            const result = await productService.deleteProduct(productId);
            if (result?.success){
                this.success(req, res, this.status.HTTP_OK, result?.data, "success")
            }
            else { 
                this.errors(req, res, this.status.HTTP_BAD_REQUEST, "delete failed");

            }
        } catch(error){ 

            console.log("deleteProduct ERROR in controller", error);
            this.errors(req,res, this.status.HTTP_INTERNAL_SERVER_ERROR, "Something went wrong" )
        }
    }

}

export default new ProductController(); 
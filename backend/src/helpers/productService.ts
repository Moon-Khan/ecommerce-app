import { where } from 'sequelize';
import Product from '../models/product'; // adjust path

class ProductService{

    async getAllProducts (){

        try {
            let data = await Product.findAll();

            if (data){
                return {success:true, data}
            }
            
        } catch(error){
            console.log ("getAllProducts ERROR in ProductService", error)
            return {success: false, data: []}
        }
    
    }

    async getProductsById (productID: number){

        try{
            let data = await Product.findByPk(productID)

            if (data){
                return {success: true, data}
            }
        } catch(error){
            console.log ("getProductsById  ERROR in ProductService", error)
            return {success: false, data: []}
        }
    }

    async addProduct (body: any){
        try{
            let data = Product.create(body);
            return {success: true, data}
            
        } catch(error){
            console.log ("addProduct  ERROR in ProductService", error)
            return {success: false, data: []}
        }
    }

    async updateProduct (productId: number, updatedData: any){
        try{
            const data = await Product.update(updatedData, { where: {id: productId }});

            if ( !data) {
                return { success: false, data: null}
            }

            return { success: true, data}

        } catch(error){
            console.log ("updateProduct  ERROR in ProductService", error)
            return {success: false, data: []}
        }
    }

    async deleteProduct(productId: Number){
        try{
            let data  = await Product.update({is_deleted: true}, { where: {id: productId}})

            if (!data || data[0] === 0) {
                return { success: false, data: null}
            }

            return { success: true, data: "data deleted"}

        } catch(error){
            console.log ("deleteProduct  ERROR in ProductService", error)
            return {success: false, data: []}
        }
        
    }
}

export default new ProductService();
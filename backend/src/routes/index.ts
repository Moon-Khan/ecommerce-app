import { Application } from 'express';
import products from "./productRoutes";

const initializeRoutes = (app: Application) => {

  app.use("/v1/products", products);

}

export default initializeRoutes;

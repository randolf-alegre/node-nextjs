import express, { Request, Response } from 'express';
import { instantiateProductController } from '../controller';

export const producRoutes = express.Router();

producRoutes.get('/products', (req: Request, res: Response) => {
    instantiateProductController().getAllProducts(req, res)
});
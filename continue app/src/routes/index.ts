import express from 'express';
import { producRoutes } from './product';
export const routes = express.Router();

routes.use(producRoutes);
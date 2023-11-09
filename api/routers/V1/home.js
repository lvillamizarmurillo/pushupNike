import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Producto from '../../services/productos.js';
import { validate } from '../../validation/validation.js';

const router = Router();
const version = routesVersioning();

router.get('/', version({'1.0.0': validate(Producto.getAll)}))

router.post('/', version({'1.0.0': validate(Producto.getAllCategory)}))

export {
    router
}
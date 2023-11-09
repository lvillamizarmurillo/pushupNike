import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Usuario from '../../services/usuarios.js';
import { validate } from '../../validation/validation.js';

const router = Router();
const version = routesVersioning();

router.post('/', version({'1.0.0': validate(Usuario.postUser)}))

export {
    router
}
import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Usuario from '../../services/usuarios.js';
import { validate } from '../../validation/validation.js';
import passportHepert from '../../config/passportHelpert.js'

const router = Router();
const version = routesVersioning();

router.use(passportHepert.authenticate('bearer', {session: false}));

router.get('/info', version({'1.0.0': validate(Usuario.getInfo)}))

export {
    router
}
import { crearToken } from '../../middleware/jwt.js';
import { Router } from 'express';
import routesVersioning from 'express-routes-versioning';
import { loginUsuario } from '../../services/login.js';

const router = Router();
const version = routesVersioning();

router.use(crearToken)

router.post('/', version({'1.0.0': loginUsuario}))

export {
    router
}
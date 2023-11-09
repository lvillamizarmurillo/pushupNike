import { check } from 'express-validator';

const completa = [
    check('email').isString().withMessage({status: 400, message: 'El email es obligatorio y debe ser string'}),
    check('password').isString().withMessage({status: 400, message: 'La contraseña es obligatorio y debe ser string'}),
];

export const DTO = {
    "1.0.0": completa
}
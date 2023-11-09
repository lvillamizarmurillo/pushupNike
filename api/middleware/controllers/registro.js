import { check } from 'express-validator';

const completa = [
    check('nombre').isString().withMessage({status: 400, message: 'El nombre es obligatorio y debe ser string'}),
    check('apellido').isString().withMessage({status: 400, message: 'El apellido es obligatorio y debe ser string'}),
    check('email').isString().withMessage({status: 400, message: 'El email es obligatorio y debe ser string'}),
    check('password').isString().withMessage({status: 400, message: 'La password es obligatorio y debe ser string'}),
];

export const DTO = {
    "1.0.0": completa
}
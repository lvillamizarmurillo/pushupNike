import db from '../config/conection.js';
import { validationResult } from 'express-validator';
import { DTO } from '../middleware/controllers/registro.js';

const usuario = await db.getconnection().nombreTabla('usuarios').conectar();

export default class Usuario{
    static async postUser(req,res){
        if(!req.rateLimit) return;
        await Promise.all(DTO[`${req.headers["accept-version"]}`].map(res => res.run(req)));
        const {errors} = validationResult(req);
        if (errors.length) return res.status(400).json({ errors });
        req.body.rol = "usuario"
        req.body.permisos = {
            "/usuario": [
              "1.0.0",
              "1.0.1",
              "1.0.2",
              "1.0.3",
              "1.0.4",
              "1.0.5",
              "1.0.6",
              "1.0.7"
            ]
          }
        await usuario.insertOne(req.body);
        res.status(200).send({status: 200, message: "Usuario registrado con exito"});
    }
}
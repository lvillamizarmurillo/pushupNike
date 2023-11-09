import { jwtVerify, SignJWT } from 'jose';
import db from '../config/conection.js';
import { ObjectId } from 'mongodb';
import { validationResult } from 'express-validator';
import { DTO } from '../middleware/controllers/login.js';

const env = loadEnv('developmend', process.cwd(), 'JWT')

const usuario = await db.getconnection().nombreTabla('usuarios').conectar();

const crearToken = async(req,res,next)=>{
    if(!req.rateLimit) return;
    await Promise.all(DTO[`1.0.0`].map(res => res.run(req)));
    const {errors} = validationResult(req);
    if (errors.length) return res.status(400).json({ errors });
    const encoder = new TextEncoder();
    const result = await usuario.findOne({email: req.body.email, password: req.body.password})
    if(!result) return res.status(401).send({status:401,message:'Usuario no encontrado'})
    const id = result._id.toString();
    const jwtEncriptado = await new SignJWT({id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(env.JWT));
    req.data = {status:200,message:jwtEncriptado};
    next()
}
const verificarToken = async(req,token)=>{
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env.JWT)
        )
        const baseQuitada = req.baseUrl.slice(5)
        console.log(baseQuitada);
        let result = await usuario.findOne({
            _id: new ObjectId(jwtData.payload.id),
            [`permisos.${baseQuitada}`]: `${req.headers['accept-version']}`
        })
        return result
    } catch (error) {
        return false;
    }
}

export {
    crearToken,
    verificarToken
}
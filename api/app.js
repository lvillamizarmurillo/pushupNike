import express from 'express';
import rateLimit from './config/rateLimit.js';
import routerDinamico from './routers/index.js';
import { loadEnv } from 'vite';
import cors from 'cors';

const env = loadEnv('development', process.cwd(), 'VITE');

const config = {
    hostname: env.VITE_HOSTNAME,
    port: env.VITE_PORT_BACKEND
}


const app = express();
    
app
    .use(rateLimit)

    .use(cors())

    .use(express.json())

    .use(async(req,res,next)=>{
        try {
            app.use('/nike', await routerDinamico(req.header('Accept-version')));
        } catch (error) {
            res.status(400).send({status: 400,message: 'Es necesario poner en los headers la version a utilizar.'});
        }
        next();
    })

    .listen(config, ()=>{
        console.log(`http://${config.hostname}:${config.port}`);
    });
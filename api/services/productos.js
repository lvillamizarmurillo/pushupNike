import db from '../config/conection.js';

const producto = await db.getconnection().nombreTabla('producto').conectar();

export default class Producto{
    static async getAll(req,res){
        if(!req.rateLimit) return;
        const data = await producto.aggregate([
            {
                $match: {stock: {$gt: 0}}
            },
            {
                $project: {
                    _id: 0,
                    stock: 0
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data})
    }
    static async getAllCategory(req,res){
        if(!req.rateLimit) return;
        if(!req.body.categoria) return res.status(400).send({status: 400, message: 'Es necesario poner la categoria para buscar'});
        const data = await producto.aggregate([
            {
                $match: {categoria: req.body.categoria,stock: {$gt: 0}}
            },
            {
                $project: {
                    _id: 0,
                    stock: 0
                }
            }
        ]).toArray();
        if(data.length == 0) return res.status(400).send({status: 400, message: 'No hay productos por esta categoria'});
        res.status(200).send({status: 200, message: data})
    }
}
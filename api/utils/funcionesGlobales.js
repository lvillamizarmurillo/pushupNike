import { verificarToken } from "../middleware/jwt.js";

export async function traerUserLogin(req){
    let tokenUser = req.headers['authorization'].slice(7);
    let user = await verificarToken(req,tokenUser);
    return user;
}
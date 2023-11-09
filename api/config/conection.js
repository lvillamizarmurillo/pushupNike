import { MongoClient } from "mongodb";
import { loadEnv } from "vite";

const env = loadEnv('developmend', process.cwd(), 'URI_MONGODB')

export default class Connect{
    static instancia;
    dbMongo = new MongoClient(env.URI_MONGODB);
    dbnombre = 'usuarios';
    dbcoleccion = 'servientrega';
    db;

    static getconnection(){
        if(Connect.instancia instanceof Connect) return Connect.instancia;
        Connect.instancia = new Connect;
        return Connect.instancia;
    }

    nombreTabla(nombre){
        this.dbnombre = nombre
        return Connect.instancia;
    }

    conectar(){
        this.db = this.dbMongo.db(this.dbcoleccion).collection(this.dbnombre)
        return this.db
    }
}
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema.js" ;
import mysql from "mysql2/promise";
import "dotenv/config"

let dbCredentials={
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl : {
        ca:process.env.DB_SSL_CA,
        rejectUnauthorized:true
    }
    
}

if(!process.env.DB_SSL_CA) {
    dbCredentials = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,        
    }
}
const client = await mysql.createConnection(dbCredentials)

const db = drizzle(client,{schema,mode:"default",logger:true}) 

export default db
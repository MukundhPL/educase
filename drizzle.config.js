import  { defineConfig } from 'drizzle-kit';
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

export default defineConfig({
  schema: './db/schema.js',
  out: './db/migration',
  dialect: 'mysql' , // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: dbCredentials,

  verbose:true,
  strict:true
});
require('dotenv').config()

const v = process.env.TYPEORM_CONNECTION;

console.log("Olá" + v)
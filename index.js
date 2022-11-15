require('dotenv').config()

const v = process.env.TYPEORM_CONNECTION;

async () => {
    const connection = await connectionSource.initialize();
    return connection;
  },

console.log("Olá" + v)
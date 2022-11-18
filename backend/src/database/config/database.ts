import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

export const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: Number(process.env.DB_PORT),
  logging: false,
});

import 'reflect-metadata'
import dotenv from 'dotenv'
import {DataSource} from "typeorm";

dotenv.config()
const port = process.env.TYPEORM_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: port,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [`${__dirname}/**/entitties/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    migrationsTableName: "custom_migration_table"
})
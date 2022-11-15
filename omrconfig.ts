import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'crudapp',
    synchronize: false,
    logging: true,
    "entities": [
        "src/typeorm/**/*.ts"
    ],
    "migrations": [
         "typeorm/migrations/**/*.ts"
    ],
  });
  
  export default AppDataSource;
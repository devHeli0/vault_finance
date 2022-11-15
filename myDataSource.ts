import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "crudapp",
  migrations: ["src/database/migrations"],
  logging: true,
  synchronize: true,
});


export default myDataSource;
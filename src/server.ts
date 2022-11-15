import dotenv from 'dotenv'
dotenv.config();

import "reflect-metadata";
import express from "express";
import myDataSource from "../myDataSource";

// establish database connection
myDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());
app.listen(3000, () => console.log("Running!"))
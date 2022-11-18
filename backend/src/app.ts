import express from 'express';
import { Transaction } from 'sequelize';
import transactionRoute from './routes/transactionRoute';
import UserRoute from './routes/userRoute';
require('dotenv').config();


export class App {
  private express: express.Application;
  private port = process.env.PORT || 3000;

  
  constructor() {
    this.express = express();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private routes() {
    this.express.use(express.urlencoded())
    this.express.use(express.json())
    this.express.use('/user', UserRoute);
    this.express.use('/transactions', transactionRoute);
  }

  private listen(): void {
    this.express.listen(this.port, () =>
      console.log(`Running! http://localhost:${process.env.PORT}`)
    );
  }
}

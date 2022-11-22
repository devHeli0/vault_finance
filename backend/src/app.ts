import express from 'express';
import cors from 'cors';
import RegisterRoute from './routes/RegisterRoute';
import UserRoute from './routes/UserRoute';
import AccountRoute from './routes/AccountRoute';
import TransactionRoute from './routes/TransactionRoute';
import AuthRoute from './routes/AuthRoute';

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
    this.express.use(express.urlencoded());
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use('/', RegisterRoute);
    this.express.use('/', UserRoute);
    this.express.use('/', AccountRoute);
    this.express.use('/', TransactionRoute);
    this.express.use('/', AuthRoute);
    this.express.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });
  }

  private listen(): void {
    this.express.listen(this.port, () =>
      console.log(`Running! http://localhost:${process.env.PORT}`)
    );
  }
}

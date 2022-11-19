import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';
import UserController from './UserController';
var jwt = require('jsonwebtoken'); //import pode n reconherecer, teste antes de usar

class TransactionController {
  public async getProfile(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    const { authorization } = req.headers;

    
    
  }
}
export default new TransactionController();
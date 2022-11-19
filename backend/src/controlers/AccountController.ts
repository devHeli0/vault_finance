import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import UserModel from '../database/models/UserModel';
import UserController from './UserController';
var jwt = require('jsonwebtoken'); //import pode n reconherecer, teste antes de usar

class AccountController {
  public async getAccount(
    req: Request,
    res: Response
  ): Promise<Response | void> {

    let user = await AccountModel.findByPk(req.userId);

    const answer = {
      balance: user.balance,
    };

    req.userId

    return res.json(answer);
  }
 
}
export default new AccountController();

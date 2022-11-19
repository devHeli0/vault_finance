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
    return res.json(user);
  }
  public async getUser(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    let user = await AccountModel.findOne(req.body.username);
    return res.json(user);
  }
}
export default new AccountController();

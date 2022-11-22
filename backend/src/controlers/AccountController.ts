import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import UserModel from '../database/models/UserModel';
var jwt = require('jsonwebtoken'); //import pode n reconherecer, teste antes de usar

class AccountController {
  public async getAccount(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    console.log('####ACCOUNT')
    let user = await UserModel.findOne({where: {id: req.userId}});
    let account = await AccountModel.findByPk(user.accountId)

    const answer = {
      account: account.id,
      balance: account.balance,
    };

    return res.json(answer);
  }
 
}
export default new AccountController();

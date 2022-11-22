import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';
var jwt = require('jsonwebtoken'); //import pode n reconherecer, teste antes de usar

class AccountController {
  public async getAccount(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    //answer padrão
    let user = await UserModel.findOne({ where: { id: req.userId } });
    let account = await AccountModel.findByPk(user.accountId);

    await TransactionModel.findAll({
      where: { id: req.userId },
    });

    const answer = {
      account: account.id,
      balance: account.balance,
    };

    return res.json(answer);
  }
}
export default new AccountController();

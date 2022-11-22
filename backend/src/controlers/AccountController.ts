import { NextFunction, Request, Response } from 'express';
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

    let transactions = await TransactionModel.findAll({
      where: { debitedAccountId: req.userId },
      attributes: [
        'id',
        'debitedAccountId',
        'creditedAccountId',
        'value',
        'createdAt',
      ],
    });

    const answer = {
      transactions,
      account: account.id,
      balance: account.balance,
    };
    res.send(answer);
    return;
  }
}
export default new AccountController();

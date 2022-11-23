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
    try {
      
      let user = await UserModel.findOne({
        where: { id: req.userId },
      });
      let account = await AccountModel.findByPk(user.accountId);

      const answer = {
        account: account.id,
        balance: account.balance,
      };
      res.send(answer);
      return;
    } catch (error) {
      const answer = 'Falha ao renderizar Account! Tente novamente';
      res.status(400).send(answer);
      return;
    }
  }
}
export default new AccountController();

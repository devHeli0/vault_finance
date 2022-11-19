import { Request, Response } from 'express';
import { Op } from 'sequelize';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';
var jwt = require('jsonwebtoken'); //import pode n reconherecer, teste antes de usar

class TransactionController {
  public async getAccountByName(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    const username = req.body;

    try {
      const user = await UserModel.findOne({
        where:  username,
        attributes: ['username'],
        raw: true,
      });

      // const answer = {
      //   username: user.username,
      // };
      return res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Falha ao encontrar o usuário!' });
    }
  }
  public async cashout(
    req: Request,
    res: Response
  ): Promise<Response | void>{
    const username = req.body;

    try {
      const user = await UserModel.findOne({
        where:  username,
        attributes: ['username'],
        raw: true,
      });

      const accountId = await UserModel.findOne({
        where:  username,
        attributes: ['accountId'],
        raw: true,
      });

      const debited = await AccountModel.findOne({
        where: {id: accountId},
        attributes: ['id','balance'],
        raw: true,
      });

      return res.json(debited);

    } catch (error) {
      res
        .status(500)
        .json({ error: 'Falha ao encontrar o usuário!' });
    }

  }
}
export default new TransactionController();

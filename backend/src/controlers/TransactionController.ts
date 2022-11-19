import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';
var jwt = require('jsonwebtoken'); //import pode n reconherecer, teste antes de usar

class TransactionController {
  public async trans(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    const { username } = req.body;

    try {
      const users = await UserModel.findOne({where: {user: username}});
      
      res.json(users);

    } catch (error) {
      console.log('ERROR');
      res
        .status(500)
        .json({ error: 'Falha ao encontrar o usuário!' });
    }
  }
}
export default new TransactionController();

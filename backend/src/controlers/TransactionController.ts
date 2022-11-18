import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';
var jwt = require('jsonwebtoken');//import pode n reconherecer, teste antes de usar

class TransactionController {

  public async trans(
    req: Request,
    res: Response
  ): Promise<Response|void> {
    const { username, value } = req.body;

    console.log(`${username}`)

    let user = await UserModel.findOne({
      where: { username },
    });

    if (!user) return res.status(400).send('Usuário não existe!');

    const account = await AccountModel.create();

    const tDebit = await TransactionModel.create({
      debitedAccountId: account.id,
      value: value,
    });

    // const tCredit = await TransactionModel.create({
    //   id: transactionId.id,
    //   CreditedAccountId: 'req.params.username' ,
    //   value: req.body.value,
    // });

    console.log(tDebit)
    return res.json(tDebit)

    //return res.json({user: req.userName})

  }

}
export default new TransactionController();
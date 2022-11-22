import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';

class TransactionController {
  public async cashout(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    const { username, value } = req.body;
    
    let debitedId = await AccountModel.findByPk(req.userId);

    const account = await UserModel.findOne({
      where: { username },
      attributes: ['accountId'],
    });

    
    let creditedId = await AccountModel.findByPk(account.accountId);

    try {
      if (debitedId.balance >= value) {
        const transaction = await TransactionModel.create({
          debitedAccountId: account.accountId,
          value: value,
        });

        await AccountModel.update(
          {
            balance: debitedId.balance - value,
          },
          {
            where: { id: req.userId },
          }
        );

        await AccountModel.update(
          {
            balance: creditedId.balance + value,
          },
          {
            where: { id: account.accountId },
          }
        );
        const answer = { transaction };
        return res.send(answer);
      } else {
        res.send(
          'Você não tem saldo o suficente para realizar essa transação!'
        );
      }
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Falha ao realizer transação!' });
    }
  }
}

export default new TransactionController();

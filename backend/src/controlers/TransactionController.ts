import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { mapValueFieldNames } from 'sequelize/types/utils';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';
var jwt = require('jsonwebtoken'); //import pode n reconherecer, teste antes de usar

class TransactionController {
  public async cashout(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    const { username, payment, value } = req.body;

    const account = await UserModel.findOne({
      where: { username },
      attributes: ['accountId'],
    });

    let paying = await AccountModel.findByPk(req.userId);
    let payed = await AccountModel.findByPk(account.accountId);

    if (payment !== "debit" && payment !== "credit") {
       res.json('Selecione uma opção de pagamento')
    } else {
      if (paying.balance >= value) {
        try {
          if (payment == "debit") {
            const transaction = await TransactionModel.create({
              debitedAccountId: account.accountId,
              value: value,
            });

            await AccountModel.update(
              {
                balance: paying.balance - value,
              },
              {
                where: { id: req.userId },
              }
            );

            await AccountModel.update(
              {
                balance: payed.balance + value,
              },
              {
                where: { id: account.accountId },
              }
            );

            const answer = { transaction };

            return res.send(answer);
          }

          if (payment === "credit") {
            const transaction = await TransactionModel.create({
              creditedAccountId: account.accountId,
              value: value,
            });

            await AccountModel.update(
              {
                balance: paying.balance - value,
              },
              {
                where: { id: req.userId },
              }
            );

            await AccountModel.update(
              {
                balance: payed.balance + value,
              },
              {
                where: { id: account.accountId },
              }
            );

            const answer = { transaction };

            res.send(answer);
          }
        } catch (error) {
          return res
            .status(500)
            .send({ message: 'Falha ao realizer transação!' });
        }
      } else {
        res.send(
          'Você não tem saldo o suficente para realizar essa transação!'
        );
      }
    }
  }
}
export default new TransactionController();

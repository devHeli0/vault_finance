import { Request, Response } from 'express';
import AccountModel from '../database/models/AccountModel';
import TransactionModel from '../database/models/TransactionModel';
import UserModel from '../database/models/UserModel';

class TransactionController {
  public async cashout(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    try {
      const { username, value } = req.body;

      const account = await UserModel.findOne({
        where: { username },
        attributes: ['accountId'],
      });

      let debitedId = await AccountModel.findByPk(req.userId);
      let creditedId = await AccountModel.findByPk(account.accountId);

      if (debitedId.id === creditedId.id) {
        return res.send('Selecione um usuário válido');
      } else {
        if (debitedId.balance >= value) {
          const transaction = await TransactionModel.create({
            debitedAccountId: debitedId.id,
            creditedAccountId: account.accountId,
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

          if (transaction) {
            res.send('Transação realizada com sucesso!');
            return;
          } else {
            res.send('Transação não realizada, tente novamente!');
            return;
          }
        } else {
          res.send(
            'Você não tem saldo o suficente para realizar essa transação!'
          );
          return;
        }
      }
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Falha ao realizer transação!' });
    }
  }
  public async transactionList(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    try {
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

      const answer = { transactions };

      res.send(answer);
    } catch (error) {
      res.status(500).send({
        message: 'Falha ao renderizar lista de transações!',
      });
      return;
    }
  }
}
export default new TransactionController();

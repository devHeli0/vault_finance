import { Router } from 'express';
import TransactionController from '../controlers/TransactionController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const TransactionRoute = Router();

TransactionRoute.post(
  '/transaction',
  AuthMiddleware.authUserByToken,
  TransactionController.cashout
);

TransactionRoute.get(
  '/transaction',
  AuthMiddleware.authUserByToken,
  TransactionController.transactionList
);



export default TransactionRoute;

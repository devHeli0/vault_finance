import { Router } from 'express';
import TransactionController from '../controlers/TransactionController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const transactionRoute = Router();

transactionRoute.post(
  '/transaction',
  AuthMiddleware.authUserByToken,
  TransactionController.cashout
);

export default transactionRoute;

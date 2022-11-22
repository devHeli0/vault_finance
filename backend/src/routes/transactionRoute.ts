import { Router } from 'express';
import TransactionController from '../controlers/TransactionController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const TransactionRoute = Router();

TransactionRoute.get(
  '/transaction',
  AuthMiddleware.authUserByToken,
  TransactionController.cashout
);

export default TransactionRoute;

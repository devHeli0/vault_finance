import { Router } from 'express';
import TransactionController from '../controlers/TransactionController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const transactionRoute = Router();

transactionRoute.post('/:username', AuthMiddleware.authUserByToken,TransactionController.trans)

export default transactionRoute;

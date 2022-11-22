import { Router } from 'express';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import AccountController from '../controlers/AccountController';

const UserRoute = Router();

UserRoute.get('/account', AuthMiddleware.authUserByToken, AccountController.getAccount);//

export default UserRoute;

import { Router } from 'express';
import UsersController from '../controlers/UserController';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import AccountController from '../controlers/AccountController';

const UserRoute = Router();

UserRoute.post('/login', UsersController.login);

UserRoute.post('/account', AuthMiddleware.authUserByToken, AccountController.getAccount);

export default UserRoute;

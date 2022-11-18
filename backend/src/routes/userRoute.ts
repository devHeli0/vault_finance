import { Router } from 'express';
import AccountController from '../controlers/TransactionController';
import UsersController from '../controlers/UserController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const UserRoute = Router();

UserRoute.post('/register', UsersController.register)

UserRoute.post('/login', UsersController.signin);

export default UserRoute;

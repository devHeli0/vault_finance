import { Router } from 'express';
import AuthController from '../controlers/AuthController';

const AuthRoute = Router();

AuthRoute.get('/auth', AuthController.getAccount);

export default AuthRoute;

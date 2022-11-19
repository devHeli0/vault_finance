import { Router } from 'express';
import UsersController from '../controlers/UserController';

const RegisterRoute = Router();

RegisterRoute.post('/register', UsersController.register)

export default RegisterRoute;
import { Router } from 'express';
import UsersController from '../controlers/UserController';

const UserRoute = Router();

UserRoute.post('/register', UsersController.register)

UserRoute.post('/login', UsersController.signin);

export default UserRoute;

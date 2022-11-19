import { Router } from 'express';
import UsersController from '../controlers/UserController';

const UserRoute = Router();

UserRoute.post('/login', UsersController.signin);

UserRoute.post('/profile', UsersController.signin);

export default UserRoute;

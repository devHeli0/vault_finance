import { Router } from 'express';
import UsersController from '../controlers/UserController';

const UserRoute = Router();

UserRoute.post('/', UsersController.login);

export default UserRoute;

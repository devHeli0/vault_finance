import { Router } from 'express';
import RegisterController from '../controlers/RegisterController';

const RegisterRoute = Router();

RegisterRoute.post('/register', RegisterController.register)

export default RegisterRoute;
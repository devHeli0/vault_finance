import { Router } from 'express';
import RegisterController from '../controlers/RegisterController';

const RegisterRoute = Router();

RegisterRoute.post('/cadastro', RegisterController.register)

export default RegisterRoute;
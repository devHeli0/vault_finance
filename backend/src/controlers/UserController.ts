import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/UserModel';
import * as bcrypt from 'bcrypt';
var jwt = require('jsonwebtoken');

class UserController {
  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { username, password } = req.body;

      let user = await UserModel.findOne({
        where: { username },
      });

      const password_valid = await bcrypt.compare(
        password,
        user.password
      );

      if (!user) {
        return res
          .status(400)
          .send({ message: 'Usuário ou senha inválido!' });
      } else {
        if (!password_valid) {
          res
            .status(400)
            .send({ message: 'Usuário ou senha inválido!' });
          return;
        } else {
          const AccessToken = jwt.sign({ id: user.id }, 'secret', {
            expiresIn: '24h',
          });
          const answer = {
            user: user.username,
            password: user.password,
            AccessToken: AccessToken,
            message: 'Entrando...',
          };
          res.send(answer);
          next();
          return;
        }
      }
    } catch (error) {
      next(error);
    }
  }
}
export default new UserController();

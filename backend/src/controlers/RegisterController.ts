import { Request, Response } from 'express';
import UserModel from '../database/models/UserModel';
import * as bcrypt from 'bcrypt';
import AccountModel from '../database/models/AccountModel';
var jwt = require('jsonwebtoken');

class RegisterController {
  public async register(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { username, password } = req.body;

    try {
      let user = await UserModel.findOne({
        where: { username },
      });
      
      if (user) {
        console.log('USER');
        return res.json('Usuário já existe!');
      } else {
        const account = await AccountModel.create();
        if (password.length < 8 || username.length < 3) {
          const answer = {
            message: 'Username ou Senha inválidos!',
          };
          res.send(answer);
          return;
        }
        user = await UserModel.create({
          username,
          password: await bcrypt.hash(password, 8),
          accountId: account.id,
        });
        console.log('FINALDALOG');
        const answer = {
          message: 'Usuário cadastrado com sucesso!',
        };
        res.send(answer);
        return;
      }
    } catch (error) {
      const answer = {
        message: 'Falha ao cadastrar usuário, tente novamente!',
      };
      res.status(400).send(answer);
      return;
    }
  }
}

export default new RegisterController();

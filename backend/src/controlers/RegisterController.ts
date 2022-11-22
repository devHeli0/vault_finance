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
    console.log('###register')
    if (password.length < 8)
      return res
        .status(400)
        .send('Senha deve ter ao menos 8 caracteres!');

    let user = await UserModel.findOne({
      where: { username },
    });

    if (user) {
      //return res.status(400).send('Usuário já existe!');
      return res.json('Usuário já existe!')
    } else {
      const account = await AccountModel.create();

      user = await UserModel.create({
        username,
        password: await bcrypt.hash(password, 8),
        accountId: account.id,
      });

      const answer = {
        message: 'Usuário cadastrado com sucesso!',
        //id: user.id,
        //username: user.username,
        //balance: account.balance,
      };

      return res.json(answer);
    }
  }
}
export default new RegisterController();

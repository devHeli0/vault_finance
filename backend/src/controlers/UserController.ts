import { Request, Response } from 'express';
import UserModel from '../database/models/UserModel';
import * as bcrypt from 'bcrypt';
import AccountModel from '../database/models/AccountModel';
var jwt = require('jsonwebtoken');

class UserController {
  public async register(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { username, password } = req.body;

    if (password.length < 8) return res.status(400).send('Senha deve ter ao menos 8 caracteres!');

    let user = await UserModel.findOne({
      where: { username },
    });

    if (user) return res.status(400).send('Usuário já existe!');

    const account = await AccountModel.create();

    user = await UserModel.create({
      username,
      password: await bcrypt.hash(password, 8),
      accountId: account.id,
    });

    const answer = {
      message: 'Usuário cadastrado com sucesso!',
      id: user.id,
      username: user.username,
      balance: account.balance,
    };

    return res.json(answer);
  }

  public async signin(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { username, password } = req.body;

    let user = await UserModel.findOne({
      where: { username },
    });
    
    console.log(user, req.body);
    const password_valid = await bcrypt.compare(
      password,
      user.password
    );

    if (!user) {
      return res
        .status(400)
        .send({ message: 'Usuário não não encontrado.' });
    }
    if (!password_valid) {
      return res.status(400).send({ message: 'Senha incorreta.' });
    }
    return res.json(user,);
  }

  }

export default new UserController();

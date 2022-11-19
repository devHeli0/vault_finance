import { Request, Response } from 'express';
import UserModel from '../database/models/UserModel';
import * as bcrypt from 'bcrypt';
import AccountModel from '../database/models/AccountModel';
import UserRepository from '../repositories/userRepository';
var jwt = require('jsonwebtoken');

class UserController {
  
  public async login(
    req: Request,
    res: Response
  ): Promise<Response> {

    const { username, password } = req.body;

    let user = await UserModel.findOne({
      where: { username },
    });

    if (!user) {
      return res
        .status(400)
        .send({ message: 'Usuário ou senha inválido!' });
    }
    
    const password_valid = await bcrypt.compare(
      password,
      user.password
    );
    
    if (!password_valid) {
      return res.status(400).send({ message: 'Usuário ou senha inválido!' });
    }
    
    const AcessToken = jwt.sign({id: user.id}, 'secret', {expiresIn: '24h'})

    const answer = {
      username: user.username,
      password: user.password,
      AcessToken: AcessToken
    };
    return res.json(answer);
  }

}
export default new UserController();

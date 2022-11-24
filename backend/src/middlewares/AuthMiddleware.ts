import { NextFunction, Request, Response } from 'express';
var jwt = require('jsonwebtoken');

class AuthMiddleware {
  public authUserByToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).json({ message: 'Acesso restrito!' });

    const token = authorization.replace('Bearer', '').trim();

    try {
      const decoded = jwt.verify(token, 'secret');

      const { id, user } = decoded; //eu sei que tem id e user, em algum momento preciso do user

      req.userId = id;
      req.userName = user;

      return next();
    } catch {
      return res.status(401).json({ mensagem: 'Token inválido!' });
    }
  }
}

export default new AuthMiddleware();

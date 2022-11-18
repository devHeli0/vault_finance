import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
}

const AuthMiddleware = (
  err: { code: number; message: string },
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { authorization } = req.headers;
  const {userid} = req.body;

  if (!authorization) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const [, token] = authorization.split('');

  try {
    const decoded = verify(token, 'secret');

    const { id } = decoded as TokenPayload;

    req.userid= id;
    _next();

  } catch (error) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
};

export default AuthMiddleware;

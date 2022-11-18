export default interface IUser {
    id: number;
    username: string;
    password: string;
    accountId: number;
  }

  export interface IUserService {
    getAllUsers(): Promise<IUser[]>;
  }
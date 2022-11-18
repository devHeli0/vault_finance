export default interface IAccount {
    id: number;
    balance: number;
  }

  export interface IAccountService {
    getAccount(): Promise<IAccount>;
  }
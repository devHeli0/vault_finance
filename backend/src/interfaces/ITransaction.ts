export default interface ITransactions {
    id: number;
    debitedAccountId: number;
    creditedAccountId: number;
  }

  export interface IAccountService {
    getAllTransactions(): Promise<ITransactions[]>;
  }
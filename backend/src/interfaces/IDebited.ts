export default interface IDebited {
    id: number;
  }

  export interface IDebitedService {
    getAllDebitedCounts(): Promise<IDebited[]>;
  }
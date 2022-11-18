export default interface ICredited {
    id: number;
  }

  export interface ICreditedService {
    getAllDebitedCounts(): Promise<ICredited[]>;
  }
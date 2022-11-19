import IUser from "../interfaces/IUser";
import UserModel from "../database/models/UserModel";

export default class UserRepository {
  constructor(private user = UserModel) {
    this.user= user;
  }
  
  async getAllUSers(): Promise<IUser[]> {
    const User = await this.user.findAll();
    return User;
  }
}

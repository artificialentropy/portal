import { User } from "../auth/model/user.model";

export class Profile {
  public id: number;
  public user: User;
  public first_name: string;
  public last_name: string;
  public city: string;
  public avatar: string;


  constructor(id: number, user: User, first_name: string, last_name: string, city: string, avatar: string) {
    this.id = id;
    this.user = user;
    this.first_name = first_name;
    this.last_name = last_name;
    this.city = city;
    this.avatar = avatar;
  }
}

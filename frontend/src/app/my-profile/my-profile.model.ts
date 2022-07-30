import { User } from "../auth/model/user.model";

export class MyProfile {
  public id: number;
  public user: User;
  public first_name: string;
  public last_name: string;
  public phone_number: number;
  public city: string;
  public avatar: string;


  constructor(id: number, user: User, first_name: string, last_name: string,phone_number: number, city: string, avatar: string) {
    this.id = id;
    this.user = user;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone_number= phone_number;
    this.city = city;
    this.avatar = avatar;
  }
}

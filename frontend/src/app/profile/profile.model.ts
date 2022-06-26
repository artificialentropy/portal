import { User } from "../auth/user.model";

export class Profile {
  public user: User;
  public first_name: string;
  public last_name: string;
  public phone_number: number;
  public city: string;
  public avatar: string;
  public id: number;


  constructor(id: number, user: User, first_name: string, last_name: string, phone_number: number,city: string, avatar: string) {

    this.id = id;
    this.user = user;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone_number = phone_number;
    this.avatar = avatar;
    this.city = city;
  }
}

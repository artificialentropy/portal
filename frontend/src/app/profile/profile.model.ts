export class Profile {
  public user: string;
  public first_name: string;
  public last_name: string;
  public phone_number: string;
  public city: string;
  public avatar: string;


  constructor(user: string, first_name: string, last_name: string, phone_number: string,city: string, avatar: string) {
    this.user = user;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone_number = phone_number;
    this.avatar = avatar;
    this.city = city;
  }
}

export class Company {
  public name: string;
  public description: string;
  public location: string;
  public link: string;

  constructor(name: string, description: string, location: string, link: string) {
    this.name = name;
    this.description = description;
    this.location = location;
    this.link = link;
  }
}

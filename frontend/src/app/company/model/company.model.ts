export class Company {
  public id: number;
  public name: string;
  public description: string;
  public location: string;
  public link: string;
  public slug: string;
  public goal: string;
  public strength: number;


  constructor(id: number, name: string, description: string, location: string, link: string, slug: string, goal: string, strength: number) {
    this.name = name;
    this.description = description;
    this.location = location;
    this.link = link;
    this.slug = slug;
    this.goal = goal;
    this.strength = strength;
  }
}

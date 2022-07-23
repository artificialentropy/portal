export class Job {
  public id: number;
  public title: string;
  public location: string;
  public company: string;
  public recruiter: string;
  public requirement: string;
  public job_description: string;
  public skillset: string;
  public vacancies: number;
  public ctc: number;


  constructor(id: number, title: string, location: string, company: string, recruiter: string, requirement: string, job_description: string,  skillset: string,vacancies: number,ctc: number) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.company = company;
    this.recruiter = recruiter;
    this.requirement = requirement;
    this.job_description = job_description;
    this.skillset = skillset;
    this.vacancies = vacancies;
    this.ctc = ctc;
  }
}

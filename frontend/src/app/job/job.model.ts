export class Job {
  public title: string;
  public location: string;
  public company: string;
  public recruiter: string;
  public requirement: string;
  public job_description: string;
  public skillset: string;
  public vacancies: string;
  public ctc: string;

  constructor(title: string, location: string, company: string, recruiter: string,requirement: string, job_description: string, skillset: string, vacancies: string, ctc: string) {
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

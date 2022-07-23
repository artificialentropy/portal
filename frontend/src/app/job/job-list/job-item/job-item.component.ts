import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
  @Input() job: Job;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}

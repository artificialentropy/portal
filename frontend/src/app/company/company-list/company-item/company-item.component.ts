import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';


@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {}

}

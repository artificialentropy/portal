import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Company } from '../model/company.model';
import * as fromApp from '../../reducers/index';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('companies');
        }),
        map(companyState => {
          return companyState.companies.find((company, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(company => {
        this.company = company;
      });
  }

  // onEditRecipe() {
  //   this.router.navigate(['edit'], { relativeTo: this.route });
  //   // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  // }

  // onDeleteRecipe() {
  //   // this.recipeService.deleteRecipe(this.id);
  //   this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
  //   this.router.navigate(['/recipes']);
  // }
}

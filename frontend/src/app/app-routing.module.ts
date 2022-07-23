import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'company', loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)},
  { path: 'jobs', loadChildren: () => import('./job/job.module').then(x => x.JobModule)},
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

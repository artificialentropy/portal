
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { path: "", redirectTo: "/company", pathMatch: "full" },
  {
    path: "jobs",
    loadChildren: () =>
      import("./job/job.module").then(
        m => m.JobModule
      )
  },

  {
    path: "company",
    loadChildren: () =>
      import("./company/company.module").then(
        m => m.CompanyModule
      )
  },

  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then(
        m => m.ProfileModule
      )
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(
      m => m.AuthModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

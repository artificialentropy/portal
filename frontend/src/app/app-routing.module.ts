import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'company', loadChildren: () => import('./company/company-routing.module').then(x => x.CompanyRoutingModule)},
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// const appRoutes: Routes = [
//   { path: '', redirectTo: '/company', pathMatch: 'full' },
//   {
//     path: 'company',
//     loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
//  },
//  {
//     path: 'auth',
//     loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

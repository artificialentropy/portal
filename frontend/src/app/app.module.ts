import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import * as fromApp from './reducers/index';
import {EffectsModule} from '@ngrx/effects';
import {EntityDataModule} from '@ngrx/data';
import { CompanyEffects } from './company/store/company.effects';
import { AuthEffects } from './auth/auth.effects';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core.module';
import { HomeComponent } from './home/home.component';
import { JobEffects } from './job/store/job.effects';
import { ProfilesEffects } from './profile/store/profile.effects';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileEffects } from './my-profile/store/my-profile.effects';

@NgModule({
    declarations: [AppComponent,HeaderComponent,HomeComponent,MyProfileComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        StoreModule.forRoot(fromApp.appReducer),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([AuthEffects, CompanyEffects, JobEffects, ProfilesEffects, MyProfileEffects]),
        EntityDataModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        }),
        SharedModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

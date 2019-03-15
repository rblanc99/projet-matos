import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListeAppareilsComponent } from './liste-appareils/liste-appareils.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { DetailsAppareilComponent } from './details-appareil/details-appareil.component';
import { Err404Component } from './err404/err404.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuard } from './services/auth-guard.service';
import { NouvelAppareilComponent } from './nouvel-appareil/nouvel-appareil.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { NouvelUserComponent } from './nouvel-user/nouvel-user.component';
import { SearchComponent } from './search/search.component';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const appRoutes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'appareils', component: ListeAppareilsComponent, canActivate: [AuthGuard]},
  {path: 'appareils/:id', component: DetailsAppareilComponent, canActivate: [AuthGuard]},
  {path: 'new-appareil', component: NouvelAppareilComponent, canActivate: [AuthGuardAdmin]},
  {path: 'users', component: ListeUsersComponent, canActivate: [AuthGuard]},
  {path: 'new-user', component: NouvelUserComponent, canActivate: [AuthGuardAdmin]},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'not-found', component: Err404Component},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListeAppareilsComponent,
    AuthComponent,
    DetailsAppareilComponent,
    Err404Component,
    AccueilComponent,
    NouvelAppareilComponent,
    ListeUsersComponent,
    NouvelUserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AppareilService,
    AuthGuard,
    AuthGuardAdmin,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

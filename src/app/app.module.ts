import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GeneralService } from './services/generalService';
import { LoginService } from './services/loginService';
import { UsersService } from "./services/usersService";
import { PoliciesService } from "./services/policiesServices";

import { AppComponent } from './app.component';
import { LoginComponent } from "./components/login/login.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { SidebarComponent } from "./components/shared/sidebar/sidebar.component";
import { PoliciesComponent } from "./components/policies/policies.component";
import { UserGuard } from "./components/shared/guards/UserGuard";


const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "clients", component: ClientsComponent, canActivate: [UserGuard] },
  { path: "policies/:id", component: PoliciesComponent, canActivate: [UserGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: '**', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsComponent,
    HeaderComponent,
    SidebarComponent,
    PoliciesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [
    GeneralService, 
    LoginService,
    UsersService,
    PoliciesService,
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

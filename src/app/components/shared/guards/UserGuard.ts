import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from "../../../services/loginService";
import { Router } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }
  
  canActivate() {
    if (this.loginService.isLogged()){
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
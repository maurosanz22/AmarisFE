import { Injectable } from '@angular/core';
import { GeneralService } from './generalService';
import { Router } from '@angular/router';

const USER_EMAIL_KEY = 'userEmail';

@Injectable()
export class LoginService {

  constructor(private router: Router,  private generalService: GeneralService) { }
  
  isAuthorizedUser(email: string, callback) {
    this.generalService.get('http://www.mocky.io/v2/5808862710000087232b75ac').then((response) => {
        let res = response.json();
        let result = !!res.clients.find(x => { return x.email === email });
        
        if (result){
          sessionStorage.setItem(USER_EMAIL_KEY, email);
        }

        callback(result);
    });
  }

  isLogged(){
      return!!sessionStorage.getItem(USER_EMAIL_KEY);
  }

  logOut(){
    sessionStorage.removeItem(USER_EMAIL_KEY);
    this.router.navigate(['/login']);
  }
}
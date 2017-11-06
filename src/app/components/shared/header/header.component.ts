import { Component } from '@angular/core';
import { LoginService } from "../../../services/loginService";

@Component({
  selector: 'header-component',
  templateUrl: './header.template.html',
  styleUrls: ['./header.styles.scss']
})
export class HeaderComponent {

  constructor(private loginService: LoginService) {}
  
  signOut() {
    this.loginService.logOut();
  }
}
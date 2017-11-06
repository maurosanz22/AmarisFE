import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginService';

@Component({
  selector: 'login-component',
  templateUrl: './login.template.html',
  styleUrls: ['./login.styles.scss']
})
export class LoginComponent {
  public userForm: FormGroup;
  public showErrors: boolean = false;
  public showToastr: boolean = false;
  public toastrMsn: string = "The email is invalid."

  constructor(private router: Router, private _fb: FormBuilder, private loginService: LoginService) {}
  
  ngOnInit() {
    this.userForm = this._fb.group({
      userName: ['', [<any>Validators.required]]
    });
  }

  login() {
    if (!this.userForm.valid) {
      this.showErrors = true;
    } else {
      this.loginService.isAuthorizedUser(this.userForm.controls.userName.value, (response) => {
        if (response){
          this.showToastr = false;
          this.showToastr = !this.showToastr;
          this.router.navigate(['/clients']);
        } else {
          this.showToastr = true;
        }
      });
    }
  }
}
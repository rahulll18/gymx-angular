import { Component } from '@angular/core';
import { UseraccountService } from '../customservice/useraccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  flag = false;
  errorMessage = '';
  admin = {
    username: 'admin',
    password: 'admin123',
  };

  constructor(private account: UseraccountService, private router: Router) {}

  collectData(loginform: any) {
    this.admin = loginform.value;
    console.log(this.admin);
    this.flag = this.account.login(this.admin.username, this.admin.password);
    if (this.flag) {
      window.alert('logged in successfully....');
      this.router.navigate(['products']);
    } else {
      this.errorMessage = 'Incorrect username or password';
    }
  }
}

import { Component } from '@angular/core';
import { UseraccountService } from '../customservice/useraccount.service';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resetUser, setUser } from '../ngrx/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  username: Observable<string>;

  /* changes auto detect : Angular Store */
  constructor(
    public account: UseraccountService,
    private cookie: CookieService,
    private router: Router,
    private store: Store<{ user: string }>
  ) {
    store.dispatch(setUser(cookie.get('user')));
    this.username = store.select('user');
  }

  logout() {
    this.cookie.delete('user');
    this.store.dispatch(resetUser());
    this.account.loginFlag = false;
    window.alert('logged out successfully.....');
    this.router.navigate(['/home']);
  }
}

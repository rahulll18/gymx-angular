import { inject } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

export function authGuard(): boolean {
  //if we want to inject service in class then : DI : constructor
  // if we want to inject the service in function then following
  const cookie = inject(CookieService);
  const username = cookie.get('user');
  if (username != '') return true;
  else {
    window.alert('Please login first....');
    // navigate to AdminLogin component
    return false;
  }
}

export function authorizeGuard(): boolean {
  //if we want to inject service in class then : DI : constructor
  // if we want to inject the service in function then following
  //   const account =inject(UseraccountService);
  // username : cookie / store
  // username.includes('admin')
  return true;
}

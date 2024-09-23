import { inject } from '@angular/core';
import { UseraccountService } from '../customservice/useraccount.service';

export function authGuard(): boolean {
  //if we want to inject service in class then : DI : constructor
  // if we want to inject the service in function then following
  const account = inject(UseraccountService);
  if (account.loginFlag) return true;
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

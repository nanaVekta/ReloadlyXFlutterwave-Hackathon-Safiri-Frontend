import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AccountGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;

        if (user.user.account_setted == 1) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/account-setup']);
        return false;
    }
}

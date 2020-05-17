import { UserModel } from './../_models/user.model';
import { AuthService } from './../_services/auth.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuards implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
  }
}

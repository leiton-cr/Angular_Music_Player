import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private cookie: CookieService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkSessionCookie();
  }

  checkSessionCookie():boolean{
    let result = false;
    try {
      result = this.cookie.check('token')

      if(!result){
        this.router.navigate(['/', 'auth'])
      }

    } catch (error) {
      console.log('Error en auth guard ⚠️', error);
    }finally{
      return result;
    }
  }
}
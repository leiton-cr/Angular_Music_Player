import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API:string = environment.API
    constructor(private http:HttpClient, private cookie: CookieService) {  
  }



  public sendCredentials(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API}/auth/login`, {email, password})
    .pipe(
      map((data) => data),
      tap(({tokenSession}: any) => this.cookie.set('token', tokenSession, 4, '/')),
      catchError((err)=> of(false))
    )
    ;
  }


}

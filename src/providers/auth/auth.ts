import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

    constructor(public http: Http) { }

    authenticate(): Observable<string> {
        return this.http.get('https://phoenix-auth.herokuapp.com/auth')
            .map(res => res.json());
    }
}

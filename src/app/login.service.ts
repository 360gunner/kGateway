import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators'

@Injectable()
export class LoginService {
  admin = false;
  title = 'GMAO';
  auths: any;
  authenticated = false;
  greeting = {};

  constructor(private http: HttpClient) {}

  authenticate() {

    this.http.get('/oauth2/elit/user/').subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
           
          //  this.http.get('resource').subscribe(data => this.greeting = data);
        } else {
            this.authenticated = false;
        }
        this.auths=response['authorities']
       
        for (var val of this.auths) {
          
          if( val.authority === 'ROLE_ADMIN' ){
              this.admin =true;
          }
          
        }
    }, () => { this.authenticated = false; });

    return [this.authenticated,this.admin];
  }
  logout() {
      this.http.post('logout', {}).pipe( finalize(() => {
          this.authenticated = false;
          this.admin=false;
      })).subscribe();
      return [this.authenticated,this.admin];
  }

}

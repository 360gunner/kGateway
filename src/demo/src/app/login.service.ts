import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { finalize } from 'rxjs/operators'
import { user } from './user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LoginService {
  admin = false;
  title = 'GMAO';
  auths: any;
  authenticated = false;
  greeting = {};
  name;
  tpmm;
  gest;
  user;
  data;
  data2;
  constructor(private http: HttpClient) {
    
  }


  getgest(){
   /* this.http.get('/oauth2/elit/user/').subscribe(response => {
      console.log(response)
      this.data=response;
      for (var val of this.data.authorities) {
            
        if( val.authority === 'ROLE_GESTOCK' ){
            this.gest =true;
        }
        
      }
    }); */
    this.http.get('/stock/').subscribe(response => {
      console.log(response)
      this.data2=response;
      if((this.data2.status==403) || (this.data2.status==401))
      { this.gest=false; }
      else
      { this.gest=true;} })
    return this.gest;
   }


 gettpmm(){
  /*this.http.get('/oauth2/elit/user/').subscribe(response => {
    console.log(response)
    this.data=response;
    for (var val of this.data.authorities) {
          
      if( val.authority === 'ROLE_TPMM' ){
          this.tpmm =true;
      }
      
    }
  });*/



  this.http.get('/maintenance/').subscribe(response => {
      console.log(response)
      this.data2=response;
      if((this.data2.status==403) || (this.data2.status==401))
      this.tpmm=false;
      else
      this.tpmm=true; })
    return this.gest;
 }

 getname(){
  this.http.get('/oauth2/elit/user/').subscribe(response => {
    console.log(response) 
    this.data=response;
    this.name=this.data.name;});
    return this.name
 }

  authenticate() {

    this.http.get('/oauth2/elit/user/').subscribe(response => {
      console.log(response)
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
      this.http.post('/logout', {}).pipe( finalize(() => {
          this.authenticated = false;
          this.admin=false;
      })).subscribe();
      return [this.authenticated,this.admin];
  }




}

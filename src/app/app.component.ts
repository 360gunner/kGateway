import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators'
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authenticated = false;
  l;

  constructor(private service: LoginService) {
    
  }

  ngOnInit() {
    this.l=this.service.authenticate();
    this.authenticated=this.l[0];
  }

  logout(){
    this.l=this.service.logout()
    this.authenticated=this.l[0];
  }


}

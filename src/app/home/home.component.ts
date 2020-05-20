import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin = false;
  authenticated = false;
  l;

  constructor(private service: LoginService) {
  }

  ngOnInit() {
    this.l=this.service.authenticate();
    this.authenticated=this.l[0];
    this.admin=this.l[1];
  }

}

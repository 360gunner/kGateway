import {Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
//import { user } from '../user';

@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

  tpmm=false;
  gest=false;
  //u : user;
  constructor(
    //    private route: ActivatedRoute,
        private service: LoginService
    //   , private router: Router
                  ) {
                    this.tpmm=this.service.gettpmm();
                    this.gest=this.service.getgest();  
                  }


  ngOnInit(){
  //  this.u=this.service.user;
    this.tpmm=this.service.gettpmm();
    this.gest=this.service.getgest();  
    console.log('tpmm : '+this.tpmm);
    console.log('gest : '+this.gest);
    }


  logout(): void {
    this.service.logout();
  }
}

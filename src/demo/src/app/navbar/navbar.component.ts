import {Component} from '@angular/core';
import { LoginService } from './../login.service';
@Component({
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

  private sidebarVisible: boolean = false;

  constructor(
    //    private route: ActivatedRoute,
        private service: LoginService
    //   , private router: Router
                  ) {}



  logout(): void {
    this.service.logout();
    location.reload();
  }

  sidebarToggle() {
    var body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible == false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}

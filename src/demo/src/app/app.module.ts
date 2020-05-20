
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DemandeMaintenanceModule } from './maintenance/Demande.module';
import { DemandeStockModule } from './stock/Demande.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DemandeMaintenanceModule,
    DemandeStockModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

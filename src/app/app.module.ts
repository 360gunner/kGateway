import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login.service';
//added this
import { DemandeModule } from './demande/Demande.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
//this also
    DemandeModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

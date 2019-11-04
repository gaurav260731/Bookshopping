import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolbooksComponent } from './Component/schoolbooks/schoolbooks.component';
import { AuthorbookComponent } from './Component/authorbook/authorbook.component';
import { ChildrenbookComponent } from './Component/childrenbook/childrenbook.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolbooksComponent,
    AuthorbookComponent,
    ChildrenbookComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

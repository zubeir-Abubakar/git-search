import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailspageService} from './geet/detailspage.service';

import { AppComponent } from './app.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { UpperPipe } from './upper.pipe';
import { AppRoutingModule } from './app-routing.module';
import { RoutingModule } from './routing/routing.module';

const routes:Routes=[
  {path:"detailspage",component:DetailspageComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    DetailspageComponent,
    LandingComponent,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RoutingModule,
    AppRoutingModule
  ],
  providers: [DetailspageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

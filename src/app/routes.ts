import { Routes, RouterModule } from '@angular/router';

import { DetailspageComponent} from './detailspage/detailspage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const routes: Routes = [
   { path: 'home',  component: DetailspageComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' }
 ];

 @NgModule({
     declarations: [],
     imports: [
         CommonModule,
         RouterModule.forRoot(routes)
     ],
     exports: [RouterModule]
 })

 export class RoutingModule {  }

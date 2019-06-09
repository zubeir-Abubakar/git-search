import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { DetailspageComponent} from '../detailspage/detailspage.component';

const routes: Routes = [
  { path: 'home',  component: LandingComponent },
  { path: 'details',  component: DetailspageComponent },
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
export class RoutingModule { }

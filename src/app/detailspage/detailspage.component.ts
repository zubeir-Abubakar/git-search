import { Component, OnInit } from '@angular/core';
import {DetailspageService} from '../geet/detailspage.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
profile: any = [];
repos: any = [];
username: string;

constructor(private detailspageServe: DetailspageService) { }

ngOnInit() {



}

findprofile() {

 this.detailspageServe.getprofileInfo(this.username).subscribe(profile => {
   this.profile = profile;
});
 this.detailspageServe.getprofileRepos().subscribe(repos => {
   this.repos = repos;
 });

}
}

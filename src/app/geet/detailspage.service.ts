import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailspageService {

  private username: string;
  private clientid = '52aa4e174d40e0580474';
  private clientsecret = '957370473fefe9f713e32ab59ce42fc421adb7cb';

  constructor(private http: HttpClient) {
      this.username = 'zubeir-Abubakar';
 }
 getprofileInfo(username) { 
   return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

 }
 getprofileRepos() {

return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);


   }



}

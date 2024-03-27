import { Component, OnInit } from '@angular/core';
import {StoreService} from "../service/store.service";
import {User} from "../model/User";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: StoreService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/api/home`).subscribe(x => {
      console.log(x);
    });
  }

  logout(){
    this.store.changeUser(new User());
    this.router.navigate([''])
  }


}

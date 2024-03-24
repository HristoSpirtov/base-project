import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.authenticationService.login(this.form.value).subscribe(x => {
        console.log(x)
      })
    }
  }


}

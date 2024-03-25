import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../service/authentication.service";
import {User} from "../model/User";
import {StoreService} from "../service/store.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

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

  constructor(private authenticationService: AuthenticationService, private store: StoreService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.authenticationService.login(this.form.value).subscribe({
        next: (response: User) => {
          this.store.enhanceUserWithDetails(response);
          this.router.navigate(['home']).then();
        },
        error: () => {
          this.form.reset()
        }
      })
    }
  }
}

import { AuthService } from './../_services/auth.service';
import { LoginModel } from './../_models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginRequest: LoginModel = new LoginModel();
  invalidUser;

  form;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private flashMessage: FlashMessagesService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.loginRequest.username = this.username.value;
    this.loginRequest.password = this.password.value;
    this.authService.login(this.loginRequest).subscribe(result => {
      if (result) {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.flashMessage.show(`Welcome ${this.username.value}`, { cssClass: 'alert-success', timeout: 10000 });
        if (returnUrl) {
         this.router.navigate([returnUrl]);
        } else {
         this.router.navigate(['/']);
        }

      } else {
        this.invalidUser = true;
      }

    }, error => {
      this.invalidUser = true;
    });

  }

  showFlash() {
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
        this.flashMessage.show(`Welcome ${this.username.value}`, { cssClass: 'alert-success', timeout: 10000 });
    }

}

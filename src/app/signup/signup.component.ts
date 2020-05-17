import { SignupValidators } from './signup.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form;

  // form1 = new FormGroup({
  //   username:new FormControl('',[Validators.required,SignupValidators.canNotCantainSpace]),
  //   password:new FormControl('',Validators.required)
  // });

  constructor( private fb: FormBuilder) {
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

  submit() {
    console.log('====' + this.username.value);
  }
}

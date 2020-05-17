import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  contactMethod = [{
    id: 1, name: 'email'
  }, {
    id: 2, name: 'phone'
  }, {
    id: 3, name: 'text'
  }];
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  viewMode = 'map';

  courses = [

    {
      id: 1,
      name: 'Course1'
    },
    {
      id: 2,
      name: 'Course2'
    },
    {
      id: 3,
      name: 'Course3'
    },
    {
      id: 4,
      name: 'Course4'
    },
    {
      id: 5,
      name: 'Course5'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

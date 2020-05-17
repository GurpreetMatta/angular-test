import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {

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

}

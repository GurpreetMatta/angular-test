import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent implements OnInit {

  constructor(private location: Location) {}

  backClicked() {
    this.location.back();
  }
  ngOnInit() {
  }

}

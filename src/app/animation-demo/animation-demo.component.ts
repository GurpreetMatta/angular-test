import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger('openclosed',[
      state('open',
        style({
          height: '200px',
          width: '200px',
          opacity:1,
          background:'yellow'
        })
      ),
      state('closed',
        style({
          height: '100px',
          width: '200px',
          opacity:1,
          background:'green'
        })        
      ),
      transition('open <=> closed',[
        animate(3000)
      ])
    ])
  ]
})
export class AnimationDemoComponent implements OnInit {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}

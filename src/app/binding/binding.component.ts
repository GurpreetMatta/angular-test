import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = 'Title String Interpolation';
  src = 'https://picsum.photos/200/300';
  colspan = 2;
  isActive = true;
  keyUp: string;
  post = {
    title: 'favorite',
    isFavorite: true
  };
  constructor() { }

  ngOnInit() {
  }

  onkeyUp(demo) {
    this.keyUp = demo;
  }

  onFavoriteChange(demo) {
    console.log('pass data', demo);
    this.post.isFavorite = !this.post.isFavorite;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite = true;

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {

      this.isFavorite = !this.isFavorite;
      this.change.emit(this.isFavorite);
  }


}

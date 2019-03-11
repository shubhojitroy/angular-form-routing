import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'fr-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  onClick() {
    this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);
  }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

}

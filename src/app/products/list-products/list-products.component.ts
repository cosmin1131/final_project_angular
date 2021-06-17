import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  @Input() itemsList: Array<any> = [];
  @Output() selectItemEvent: EventEmitter<any>;

  constructor() {
    this.selectItemEvent = new EventEmitter();
  }

  ngOnInit(): void {}

  onSelectItem(item: any): void {
    console.log(item);
    this.selectItemEvent.emit(item);
  }
}

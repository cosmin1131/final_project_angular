import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  @Input() categoriesList: Array<any>=[];
  @Output() selectCategoryEvent: EventEmitter<any>;

  constructor() {
    this.selectCategoryEvent=new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelectCategory(category: any): void {
    console.log(category);
    this.selectCategoryEvent.emit(category);
  }

}

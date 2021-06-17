import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-subcategories',
  templateUrl: './list-subcategories.component.html',
  styleUrls: ['./list-subcategories.component.css'],
})
export class ListSubcategoriesComponent implements OnInit {
  @Input() subCategoriesList: Array<any> = [];
  @Output() selectCategoryEvent: EventEmitter<any>;

  constructor() {
    this.selectCategoryEvent = new EventEmitter();
  }

  ngOnInit(): void {}

  onSelectSubCategory(subCategory: any): void {
    console.log(subCategory);
    this.selectCategoryEvent.emit(subCategory);
  }
}

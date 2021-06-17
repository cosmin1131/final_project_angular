import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory-preview',
  templateUrl: './subcategory-preview.component.html',
  styleUrls: ['./subcategory-preview.component.css'],
})
export class SubcategoryPreviewComponent implements OnInit {
  @Input() subCategory: any;

  constructor() {}

  ngOnInit(): void {}
}

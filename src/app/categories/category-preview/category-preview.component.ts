import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.css'],
})
export class CategoryPreviewComponent implements OnInit {
  @Input() category: any;

  constructor() {}

  ngOnInit(): void {}
}

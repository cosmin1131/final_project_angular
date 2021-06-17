import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css'],
})
export class ProductPreviewComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}

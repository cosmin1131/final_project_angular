import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css'],
})
export class UserPreviewComponent implements OnInit {
  @Input() user: any;
  constructor() {}

  ngOnInit(): void {}
}

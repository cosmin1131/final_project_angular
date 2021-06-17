import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: Array<any> = [];
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((response: any) => {
      console.log('get categories from db');
      console.log(response);
      this.categoriesList = response.result;
    });
  }

}

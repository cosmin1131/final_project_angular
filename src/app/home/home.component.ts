import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CategoriesService } from '../categories/categories.service';
import { ItemsService } from '../products/items.service';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<any> = [];
  categories: Array<any> = [];
  subcategories: Array<any> = [];
  description: string = "";

  constructor( private dialog: MatDialog, private itemsService: ItemsService, private categoriesService: CategoriesService, ) {
    this.description = environment.homeDescription;
  }

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe((response: any) => {
      console.log('get items from db');
      console.log(response);
      // la aceasta linie setam in variabila items rezultatul din response
      this.products = response.result;
    });
    this.categoriesService.getAllCategories().subscribe((response: any) => {
      console.log('get categories from db');
      console.log(response);
      this.categories = response.result;
    });

    this.categoriesService.getAllSubCategories().subscribe((response: any) => {
      console.log('get sub categories from db');
      console.log(response);
      this.subcategories = response.result;
    });
  }
  public onSelectProduct(product: any): void {
    console.log("Homepage");
    console.log(product);
    let dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: {
        product: product,
      },
      height: '400px',
      width: '600px',
    });
  }

}

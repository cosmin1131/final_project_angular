import { ItemsService } from '../products/items.service';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { CategoriesService } from '../categories/categories.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectedItem: any;
  selectedCategory: any;
  selectedSubcategory: any;
  selectedUser: any;

  items: Array<any> = [];
  categories: Array<any> = [];
  subcategories: Array<any> = [];
  users: Array<any> = [];

  constructor(
    private itemsService: ItemsService,
    private categoryService: CategoriesService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe((response: any) => {
      console.log('get items from db');
      console.log(response);
      // la aceasta linie setam in variabila items rezultatul din response
      this.items = response.result;
    });
    this.categoryService.getAllCategories().subscribe((response: any) => {
      console.log('get categories from db');
      console.log(response);
      this.categories = response.result;
    });

    this.categoryService.getAllSubCategories().subscribe((response: any) => {
      console.log('get sub categories from db');
      console.log(response);
      this.subcategories = response.result;
    });

    this.userService.getAllUsers().subscribe((response: any)=>{
      console.log('get users from db');
      console.log(response);
      this.users = response.result;
    })
  }
  //products
  onReceiveItem(item: any): void {
    console.log('onReceiveItem');
    console.log(item);
    this.itemsService.createItem(item).subscribe((response: any) => {
      // adaugam elementul primit in lista
      this.items.push(response.result);
      console.log(this.items);

      console.log(response);
    });
  }
  onReceiveCategory(category: any): void {
    console.log('onReceiveCategory');
    console.log(category);
    this.categoryService.createCategory(category).subscribe((response: any) => {
      this.categories.push(response.result);
      console.log(this.categories);
      console.log(response);
    });
  }
  onReceiveSubCategory(subCategory: any): void {
    console.log('onReceiveSubCategory');
    console.log(subCategory);
    this.categoryService
      .createSubCategory(subCategory)
      .subscribe((response: any) => {
        this.subcategories.push(response.result);
        console.log(this.subcategories);
        console.log(response);
      });
  }

  onReceiveUser(user: any): void{
    console.log('onReceiveUser');
    this.userService.createUser(user).subscribe((response:any) =>{
      alert(response.message);
      this.users.push(response.result);
      
    });
  }

  onEditItem(item: any): void {
    this.itemsService.updateItem(item.id, item).subscribe((response: any) => {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == item.id) {
          this.items[i] = response.result;
        }
      }
      this.selectedItem = null;
    });
  }

  onEditCategory(category: any): void {
    console.log('onEditCategory');
    console.log(category);
    this.categoryService
      .updateCategory(category.id, category)
      .subscribe((response: any) => {
        for (let i = 0; i < this.categories.length; i++) {
          if (this.categories[i].id == category.id) {
            this.categories[i] = response.result;
          }
        }
        this.selectedCategory = null;
      });
  }

  onEditSubCategory(subCategory: any): void {
    console.log('onEditSubCategory');
    console.log(subCategory);
    this.categoryService
      .updateSubCategory(subCategory.id, subCategory)
      .subscribe((response: any) => {
        for (let i = 0; i < this.subcategories.length; i++) {
          if (this.subcategories[i].id == subCategory.id) {
            this.subcategories[i] = response.result;
          }
        }
        this.selectedSubcategory = null;
      });
  }

  onEditUser(user: any): void{
    console.log('onEditUser');
    this.userService.updateUser(user).subscribe((response:any) =>{
    for (let i = 0; i < this.users.length; i++){
      if(this.users[i].id == user.id){
        this.users[i] = response.result;
      }
    }
    this.selectedUser = null;
    });
  }

  onDeleteItem(itemId: any): void {
    this.itemsService.deleteItemForever(itemId).subscribe((response: any) => {
      this.items = this.items.filter((item: any) => item.id != itemId);
      this.selectedItem = null;
      console.log(response);
    });
  }

  onDeleteCategory(categoryId: any): void {
    console.log('onDeleteCategory');
    console.log(categoryId);
    this.categoryService
      .deleteCategoryForever(categoryId)
      .subscribe((response: any) => {
        this.categories = this.categories.filter(
          (category: any) => categoryId != category.id
        );
        this.selectedCategory = null;
        console.log(response);
      });
  }

  onDeleteSubCategory(subCategoryId: any): void {
    console.log('onDeleteSubCategory');
    console.log(subCategoryId);
    this.categoryService
      .deleteSubCategoryForever(subCategoryId)
      .subscribe((response: any) => {
        this.subcategories = this.subcategories.filter(
          (subCategory: any) => subCategoryId != subCategory.id
        );
        this.selectedSubcategory = null;
        console.log(response);
      });

    
  }

  onDeleteUser(userId: any): void {
    console.log('onDeleteUser');
    console.log(userId);
    this.userService.deleteUser(this.selectedUser.id).subscribe((response:any) =>{
    this.users = this.users.filter(
      (user:any) => userId != user.id
    );
    this.selectedUser = null;
      
    });
  }

  onSelectedItemFromList(item: any): void {
    console.log('item from dashboard');
    console.log(item);
    this.selectedItem = item;
  }

  onSelectedCategoryFromList(category: any): void {
    console.log('category from dashboard');
    console.log(category);
    this.selectedCategory = category;
  }

  onSelectedSubCategoryFromList(subCategory: any): void {
    console.log('category from dashboard');
    console.log(subCategory);
    this.selectedSubcategory = subCategory;
  }

  onSelectedUserFromList(user: any): void{
    console.log('user from dashboard');
    console.log(user);
    this.selectedUser = user;

  }
}

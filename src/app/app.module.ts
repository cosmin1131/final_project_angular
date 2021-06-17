import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './utils/http-config-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrderComponent } from './order/order.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddEditUserComponent } from './dashboard/add-edit-user/add-edit-user.component';
import { AddEditProductsComponent } from './dashboard/add-edit-products/add-edit-products.component';
import { AddEditCategoriesComponent } from './dashboard/add-edit-categories/add-edit-categories.component';
import { CategoryPreviewComponent } from './categories/category-preview/category-preview.component';
import { ProductPreviewComponent } from './products/product-preview/product-preview.component';
import {
  MatFormFieldModule,
  MatLabel,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { MatSelectModule } from '@angular/material/select';
import { ListSubcategoriesComponent } from './categories/list-subcategories/list-subcategories.component';
import { SubcategoryPreviewComponent } from './categories/subcategory-preview/subcategory-preview.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { AddEditSubCategoriesComponent } from './dashboard/add-edit-sub-categories/add-edit-sub-categories.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDetailsComponentModule } from './products/product-details/product-details.module';
import { ListUsersComponent } from './user/list-users/list-users.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CategoriesComponent,
    OrderComponent,
    MyAccountComponent,
    AddEditUserComponent,
    AddEditProductsComponent,
    AddEditCategoriesComponent,
    CategoryPreviewComponent,
    ProductPreviewComponent,
    ListCategoriesComponent,
    ListSubcategoriesComponent,
    SubcategoryPreviewComponent,
    ListProductsComponent,
    AddEditSubCategoriesComponent,
    UserPreviewComponent,
    ListUsersComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    ProductDetailsComponentModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

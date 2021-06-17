import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { MyAccountComponent } from './my-account/my-account.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "auth", component: AuthComponent, 
  },
  {
    path: "dashboard", canActivate: [AuthGuard], component: DashboardComponent,
  },
  {
  path: "order", canActivate: [AuthGuard], component: OrderComponent,
  },
  {
    path: "my-account", canActivate: [AuthGuard], component: MyAccountComponent,
  },
  {
    path: "categories", component: CategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  menuOptions: Array<any> = [];
  username: string = '';

  constructor(public userService: UserService, public router: Router) {
    this.username = environment.username;
  }

  ngOnInit(): void {
    this.menuOptions = [
      {
        id: '1',
        icon: 'home',
        title: 'Home',
        route: '/',
        auth: false,
        visible: true,
      },
      {
        id: '2',
        icon: 'category',
        title: 'Categories',
        route: '/categories',
        auth: false,
        visible: true,
      },
      {
        id: '3',
        icon: 'shopping_cart',
        title: 'Order',
        route: '/order',
        auth: true,
        visible: environment.displayOrder,
      },
      {
        id: '4',
        icon: 'account_circle',
        title: 'My Account',
        route: '/my-account',
        auth: true,
        visible: true,
      },
      {
        id: '5',
        icon: 'admin_panel_settings',
        title: 'Admin',
        route: '/dashboard',
        auth: true,
        visible: true,
      },
      {
        id: '6',
        icon: 'logout',
        title: 'Logout',
        route: '',
        visible: this.userService.isUserLoged(),
      },
    ];
  }

  public showInfo(option: any, sidenav: any): void {
    sidenav.toggle();
    if (option.auth == true && this.userService.isUserLoged() == false) {
      UserService.lastRoute = option.route;
      this.router.navigateByUrl('/auth');
      return;
    }
    console.log(option);
    switch (option.id) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
        this.router.navigateByUrl(option.route);
        break;
      case '6':
        this.userService.logOut();
        break;
    }
  }
}

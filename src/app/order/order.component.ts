import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  currentOrder: any[] | undefined;
  placedOrders: any[] | undefined;

  constructor(private orderService: OrdersService, private userService: UserService) { }

  ngOnInit(): void {
    this.getCurrentOrder();
  }

  getCurrentOrder() {
    this.currentOrder = this.orderService.getOrder();
  }

  placeOrder() {
    this.orderService.createOrder(this.userService.getUser()?.id, this.currentOrder).subscribe(
      (response: any) => {
        console.log(response);
        this.placedOrders = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

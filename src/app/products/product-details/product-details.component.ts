import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrdersService } from 'src/app/order/orders.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private orderService :OrdersService) {
    this.product = data.product;
   }

  ngOnInit(): void {
    console.log("product details");
    console.log(this.data.product);
  }

  onAddItemToOrder(): void {
    this.orderService.addItem(this.product);
  }

  onCloseDialog(): void{
    this.dialog.closeAll();
  }

}

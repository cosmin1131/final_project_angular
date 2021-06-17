import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  itemsOrder: Array<any> = [];

  constructor(private httpClient: HttpClient) { }

  public createOrder(userId: any, order: any){
    console.log(order);
    return this.httpClient.post("http://localhost:8080/orders/create/"+userId, order);
  }

  public updateOrder(orderId: number, order: any){
    return this.httpClient.put("http://localhost:8080/orders/"+orderId, order);
  }

  public deleteOrder(orderId: number){
    return this.httpClient.delete("http://localhost:8080/orders/"+orderId);
  }

  public getAllOrders(){
    return this.httpClient.get("http://localhost:8080/orders");
  }

  public addItem(item: any) {
    this.itemsOrder.push(item);
  }

  public getOrder() {
    return this.itemsOrder;
  }

}

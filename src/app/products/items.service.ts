import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) {   }

  public createItem(item: any){
    console.log(item);
    return this.httpClient.post("http://localhost:8080/items/create", item);
  }

  public updateItem(itemId: number, item: any){
    return this.httpClient.put("http://localhost:8080/items/"+itemId, item);
  }

  public deleteItem(itemId: number){
    return this.httpClient.delete("http://localhost:8080/items/"+itemId);
  }

  public deleteItemForever(itemId: number){
    return this.httpClient.delete("http://localhost:8080/items/"+itemId);
  }

  public getAllItems(){
    return this.httpClient.get("http://localhost:8080/items");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // httpClient - ne ajuta sa trimitem date catre server(adica ce faceam cu Postman)
  constructor(private httpClient: HttpClient) { }

  public login(data: any){
    return this.httpClient.post("http://localhost:8080/auth/login", data);
  }

  public register(data: any){
    return this.httpClient.post("http://localhost:8080/auth/register", data);
  }

  public forgotPassword(data: any){
    return this.httpClient.post("http://localhost:8080/auth/forgot-password", data);
  }
}

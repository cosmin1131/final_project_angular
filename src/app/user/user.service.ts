import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public static lastRoute: string = "/";

private user: UserModel | undefined;
  constructor(private router: Router, private http: HttpClient) { }

  public setUser(user: UserModel): void {
    this.user = user;
  }

  public getUser(): UserModel | undefined {
    return this.user;
  }
  

  public getToken(): string | undefined {
    if(this.user){
      return this.user.token;
    }
    return undefined;
  }

  public isUserLoged(): boolean {
    return this.user != undefined;
  }

  public logOut(): void {
    this.user = undefined;
    this.router.navigate(['/', 'auth'])
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put("http://localhost:8080/users/update", user);
  }
  public createUser(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/auth/register", user);
  }
  public deleteUser(userId: any): Observable<any> {
    return this.http.delete("http://localhost:8080/users/delete/"+ userId);
  }
  public getAllUsers(): Observable<any> {
    return this.http.get("http://localhost:8080/users")
  }
}

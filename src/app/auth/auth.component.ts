import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authType: string = 'login';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openComponent(): void {
    this.router.navigate(['/', 'component', 'show-myname']);
  }

  onAuthType(auth: string): void {
    this.authType = auth;
  }

  
}

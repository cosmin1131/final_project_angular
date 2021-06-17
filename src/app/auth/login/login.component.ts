import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit(): void { }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response);

      if (response.status == 200) {
        let user = response.result.user;
        user.token = response.result.token;
        this.userService.setUser(user);

        this.router.navigate([UserService.lastRoute])
      } else {
        alert(response.error);
      }

    }, (error) => {
      console.log(error);
    }
    );

  }
}

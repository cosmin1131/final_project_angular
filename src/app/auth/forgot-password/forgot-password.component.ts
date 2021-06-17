import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) {
    this.forgotPasswordForm = formBuilder.group({
      email: ['', Validators.email],
    });
  }

  ngOnInit(): void {
  }

  onForgotPassword (): void {
    console.log(this.forgotPasswordForm.value);
    this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe((response: any) => {
      console.log(response);

      if(response.status == 200) {
        alert(response.message);
      } else {
        alert(response.error);
      }
      
    }, (error) => {
      console.log(error);
    }
    );
  }

}

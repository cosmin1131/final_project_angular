import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  myAccountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.myAccountForm = formBuilder.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.myAccountForm.value);
    this.userService.updateUser(this.myAccountForm.value).subscribe((response: any) => {
      console.log(response);

      if(response.status == 200) {
        this.userService.setUser(response.result);
        alert(response.message);
      } else {
        alert(response.error);
      }

      
    })
  }
}

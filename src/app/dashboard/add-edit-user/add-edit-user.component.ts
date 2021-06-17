import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit, OnChanges {
  @Input() selectedUser: any;
  @Output('editEvent') editEvent: EventEmitter<any>;
  @Output('addEvent') addEvent: EventEmitter<any>;
  @Output('deleteEvent') deleteEvent: EventEmitter<any>;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.addEvent = new EventEmitter();
    this.editEvent = new EventEmitter();
    this.deleteEvent = new EventEmitter();
    this.userForm = formBuilder.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)],
    });
  }

  ngOnInit(): void {}

  ngOnChanges(): void{
    if(this.selectedUser != null){
      this.userForm = this.formBuilder.group({
        firstName: [this.selectedUser.firstName, Validators.minLength(3)],
        lastName: [this.selectedUser.lastName, Validators.minLength(3)],
        email: [this.selectedUser.email, Validators.email],
        password: ['', Validators.minLength(6)],
        retypePassword: ['', Validators.minLength(6)],
      });
    } else{
      this.setupForm();
    }
  }

  private setupForm(): void{
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)],
    });
  }

  onSubmit(): void{
    if(this.selectedUser != null){
      this.onUpdateUser();
    }else{
      this.onCreate();
    }
  }

  onCreate(): void {
    this.addEvent.emit(this.userForm.value);
    this.setupForm();
    this.selectedUser=null;
  }
  onUpdateUser(): void{
    this.editEvent.emit(this.userForm.value);
      
      this.setupForm();
      this.selectedUser=null;
    
  }
  onDeleteUser(): void{
    this.deleteEvent.emit(this.selectedUser.id);
    this.setupForm();
    this.selectedUser=null;
  }

}

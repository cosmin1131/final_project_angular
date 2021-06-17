import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input() usersList: Array<any>= [];
  @Output() selectUserEvent: EventEmitter<any>;

  constructor() {
    this.selectUserEvent = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelectUser(user: any): void{
    console.log(user);
    this.selectUserEvent.emit(user);
  }

}

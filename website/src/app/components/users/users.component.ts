import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Items, User } from '../../intefaces/users';
import { GenderPipe } from '../../pipes/gender.pipe';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: Items | undefined;
  
  constructor(
    public usersService: UsersService
  ) { }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (data: Items) => {
        this.userList = data;
        console.log(this.userList.items)
      }
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }

}

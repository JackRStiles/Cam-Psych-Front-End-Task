import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Items, User } from '../../intefaces/users';
import { GenderPipe } from '../../pipes/gender.pipe';
import { PaginationComponent } from '../pagination/pagination.component';
import { catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: Items | undefined;
  total = 0;
  
  constructor(public usersService: UsersService) {}

  getUsers(pageNumber: Number) {
    this.usersService.getUsers(20, pageNumber).subscribe((data: Items) => {
      this.userList = data;
    });
  }

  onClick(event: { target: any; srcElement: any; currentTarget: any }) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    value = parseInt(value);

    if (confirm(`Are you sure you want to delete #${value}`)) {
      console.log('Deleting User', value);
      this.usersService.deleteUser(value).subscribe(
        () => {
          console.log('User Deleted Successfully!');
        }
      );
      // TODO Reload the users list after deleting one
    }
  }

  ngOnInit(): void {
    console.log(`Initialising Users Component`);
    this.getUsers(0);
  }
}

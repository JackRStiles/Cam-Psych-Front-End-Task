import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../services/users.service';
import { Items } from '../../intefaces/users';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: Items | undefined;
  total = 0;
  
  constructor(
    public usersService: UsersService,
    public router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

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
      this.router.navigate(['users', 'delete', value]);
      // this.usersService.deleteUser(value).subscribe();
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle('Users - The Pyschometrics Centre');
    let id = this.route.snapshot.paramMap.get('number');
    let idInt = parseInt(id!) - 1;
    this.getUsers(idInt);
  }
}

// TODO 
// Add better error handling
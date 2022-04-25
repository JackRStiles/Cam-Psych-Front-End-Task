import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../services/users.service';
import { Items } from '../../intefaces/users';
import { FormControl } from '@angular/forms';
import { catchError, last, of } from 'rxjs';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  errorMessage: any;
  lastID = 0;

  constructor(
    private usersService: UsersService,
    private titleService: Title
    ) {}

  onSubmit(data: any) {
    let now = new Date().toISOString().slice(0, 10);
    let dob = new Date(data.dateOfBirth).toISOString().slice(0, 10);
    let user = {
      id: this.lastID + 1,
      birthDate: dob,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender.charAt(0),
      created: now,
    };

    console.log(user);

    this.usersService.addUser(user).subscribe();
  }

  ngOnInit() {
    this.titleService.setTitle('Add User - The Pyschometrics Centre');
    this.usersService.getAllUsers().subscribe((data: Items) => {
      let total = data.total;

      this.usersService.getUsers(total, 0).subscribe((data: Items) => {
        let items = data;
        this.lastID = items.items[total-1].id; 
      });
    });
  }
}

// TODO 
// This still doesn't work, it doesn't seem to error but doesn't 
// seem to work either
//
// Add better error handling
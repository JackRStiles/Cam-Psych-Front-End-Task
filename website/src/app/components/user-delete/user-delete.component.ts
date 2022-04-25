import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  constructor(
    public usersService: UsersService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('User Deleted - The Pyschometrics Centre');
    let id = this.route.snapshot.paramMap.get('id');
    let idInt = parseInt(id!);
    this.usersService.deleteUser(idInt).subscribe();
  }

}

// TODO 
// Add better error handling
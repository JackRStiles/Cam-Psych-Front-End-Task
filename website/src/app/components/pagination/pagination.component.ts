import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Items } from '../../intefaces/users';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {
  pages : number[] = [];
  
  constructor(
    private usersService: UsersService,
    private usersComponents: UsersComponent
  ) { }

  getPages() {
    this.usersService.getAllUsers().subscribe(
      (data: Items) => {
        let total = data.size;
        let size = this.usersService.size;
        let pages = Math.ceil(total / size);
        this.usersService.pages = pages;
        let i = 0;
        
        do {
          this.pages.push(i)
          i = i + 1;
        } while (i < pages)
      }
    );
  }

  onClick(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.usersService.page = parseInt(value);
    this.usersComponents.getUsers();
  }

  ngOnInit(): void {
    this.getPages();
  }

}

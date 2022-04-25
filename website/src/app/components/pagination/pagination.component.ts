import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Items } from '../../intefaces/users';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  pages: number[] = [];

  constructor(
    private usersService: UsersService,
    private usersComponents: UsersComponent
  ) {}

  calculatePageNumbers() {
    this.usersService.getAllUsers().subscribe((data: Items) => {
      let total = data.total;
      let size = this.usersService.size;
      let pagesNeeded = Math.ceil(total / size);

      let i = 0;
      do {
        this.pages.push(i);
        i = i + 1;
      } while (i < pagesNeeded);
    });

    console.log(this.pages)
  }

  onClick(event: { target: any; srcElement: any; currentTarget: any }) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    let pageNumber = parseInt(value);
    this.usersComponents.getUsers(pageNumber);
  }

  ngOnInit(): void {
    console.log(`Initialising Pagination`);
    this.calculatePageNumbers();
  }
}

// TODO 
// Add active page tracking, could possibly do it with routing.
// Attempted this by passing on object to the pages array with
// that contains the number of the page and the created router
// link but when it came to rendering the buttons using ngFor, 
// it couldn't see the properties of the object and i'm not 
// sure whay.
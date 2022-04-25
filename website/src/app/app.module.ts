import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersComponent } from './components/users/users.component';
import { GenderPipe } from './pipes/gender.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    GenderPipe,
    PaginationComponent,
    UserAddComponent,
    DashboardComponent,
    UserDeleteComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

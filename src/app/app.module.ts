import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import {BookListContainerComponent} from "./book-list/book-list.container.component";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

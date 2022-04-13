import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Book} from "./book.model";

@Component({
  selector: 'app-book-list-containter',
  templateUrl: './book-list.container.component.html'

})
export class BookListContainerComponent implements OnInit {

  books: Book[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.books = [
      {id: 1, title: "Angular", author: 'Comarch',isRead: false },
      {id: 2, title: "Angular", author: 'Comarch',isRead: false },
      {id: 3, title: "Angular", author: 'Comarch',isRead: false },
    ]
  }

  bookReadEvent(bookRead: Book): void{
    if (this.books){
      this.books = this.books.map((book : Book) =>{
        if(book.id === bookRead.id){
          bookRead.isRead = true;
        }
        return book;
      })
    }
  }

}

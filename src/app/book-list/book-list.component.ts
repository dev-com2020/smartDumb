import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "./book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input()
  books: Book[] | undefined;

  @Output()
  bookReadEvent = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  bookReadAction(book:Book):void{
    this.bookReadEvent.emit(book);
  }

}

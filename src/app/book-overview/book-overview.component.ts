import { Component, OnInit } from '@angular/core';

import { BookService } from './../shared/services/book.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss', './book-overview-mobile.component.scss']
})
export class BookOverviewComponent implements OnInit {
  books: Observable<any[]>;
  term: undefined;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }

}

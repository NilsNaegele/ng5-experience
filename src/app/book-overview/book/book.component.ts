import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from './../../shared/models/book';
import { BookService } from './../../shared/services/book.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: any[] = [];
  today = Date.now();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private bookService: BookService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(books => {
        this.books = books;
        if (this.books.length === 0) {
          this.router.navigate(['books']);
        }
    });
  }

  goBack() {
    this.location.back();
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class BookService {

  constructor(private db: AngularFireDatabase) { }

  getAllBooks() {
    return this.db.list('/books').valueChanges();
  }

  getBook(id: number) {
    return this.db.list('/books', ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  }

}

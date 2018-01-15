import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class BlogService {

  constructor(private db: AngularFireDatabase) { }

  postBlog(date, title, firstParagraph, leadQuestion,
           secondParagraph, imagePath, thirdParagraph) {
    return firebase.database().ref().child('blogs/').push({
        id: 1,
        date: Date.now(),
        title: title,
        firstParagraph: firstParagraph,
        leadQuestion: leadQuestion,
        secondParagraph: secondParagraph,
        imagePath: imagePath,
        thirdParagraph: thirdParagraph
    });
  }

  getAllBlogs() {
    return this.db.list('/blogs').valueChanges();
  }

}

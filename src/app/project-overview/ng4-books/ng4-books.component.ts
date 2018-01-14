import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng4-books',
  templateUrl: './ng4-books.component.html',
  styleUrls: ['../project/project.component.scss',
              '../project/project-mobile.component.scss',
              './ng4-books.component.scss']
})
export class Ng4BooksComponent implements OnInit {
  bigImagePath: string;
  smallImagePathFirst: string;
  smallImagePathSecond: string;

  constructor() {
    this.bigImagePath = '../../../assets/images/angular3.jpg';
    this.smallImagePathFirst = '../../../assets/images/imagesmall3.png';
    this.smallImagePathSecond = '../../../assets/images/imagesmall4.png';
  }

  ngOnInit() {
  }

}

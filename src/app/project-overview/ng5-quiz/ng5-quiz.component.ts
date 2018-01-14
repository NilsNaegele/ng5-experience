import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng5-quiz',
  templateUrl: './ng5-quiz.component.html',
  styleUrls: ['../project/project.component.scss',
              '../project/project-mobile.component.scss',
              './ng5-quiz.component.scss']
})
export class Ng5QuizComponent implements OnInit {
  bigImagePath: string;
  smallImagePathFirst: string;
  smallImagePathSecond: string;

  constructor() {
    this.bigImagePath = '../../../assets/images/quiz.jpg';
    this.smallImagePathFirst = '../../../assets/images/imagesmall5.png';
    this.smallImagePathSecond = '../../../assets/images/imagesmall7.png';
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng5-talk-to-me',
  templateUrl: './ng5-talk-to-me.component.html',
  styleUrls: ['../project/project.component.scss',
              '../project/project-mobile.component.scss',
              './ng5-talk-to-me.component.scss']
})
export class Ng5TalkToMeComponent implements OnInit {
  bigImagePath: string;
  smallImagePathFirst: string;
  smallImagePathSecond: string;

  constructor() {
    this.bigImagePath = '../../../assets/images/typescript.jpg';
    this.smallImagePathFirst = '../../../assets/images/imagesmall8.jpeg';
    this.smallImagePathSecond = '../../../assets/images/imagesmall9.png';
  }

  ngOnInit() {
  }

}

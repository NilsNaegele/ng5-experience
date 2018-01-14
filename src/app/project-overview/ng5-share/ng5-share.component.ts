import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng5-share',
  templateUrl: './ng5-share.component.html',
  styleUrls: ['../project/project.component.scss',
              '../project/project-mobile.component.scss',
              './ng5-share.component.scss']
})
export class Ng5ShareComponent implements OnInit {
  bigImagePath: string;
  smallImagePathFirst: string;
  smallImagePathSecond: string;

  constructor() {
    this.bigImagePath = '../../../assets/images/machinelearning.jpeg';
    this.smallImagePathFirst = '../../../assets/images/imagesmall10.png';
    this.smallImagePathSecond = '../../../assets/images/imagesmall11.png';
  }

  ngOnInit() {
  }

}

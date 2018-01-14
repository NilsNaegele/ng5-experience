import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng5-material',
  templateUrl: './ng5-material.component.html',
  styleUrls: ['../project/project.component.scss',
              '../project/project-mobile.component.scss',
              './ng5-material.component.scss']
})
export class Ng5MaterialComponent implements OnInit {
  bigImagePath: string;
  smallImagePathFirst: string;
  smallImagePathSecond: string;

  constructor() {
    this.bigImagePath = '../../../assets/images/angular2.png';
    this.smallImagePathFirst = '../../../assets/images/imagesmall1.png';
    this.smallImagePathSecond = '../../../assets/images/imagesmall2.png';
  }

  ngOnInit() {
  }

}

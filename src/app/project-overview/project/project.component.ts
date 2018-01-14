import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', './project-mobile.component.scss']
})
export class ProjectComponent implements OnInit {
  fullImagePath: string;
  BKAImagePath: string; // true heroes

  constructor() {
    this.fullImagePath = '../../assets/images/angular-material.png';
    this.BKAImagePath = '../../assets/images/BKA1a.png';
  }

  ngOnInit() {
  }

}
